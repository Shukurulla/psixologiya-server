import express from "express";
import Student from "../models/Student.js";
import Test from "../models/Test.js";
import TestResult from "../models/TestResult.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// @route   GET /api/admin/dashboard
// @desc    Get admin dashboard statistics
// @access  Private (Admin)
router.get("/dashboard", protect, adminOnly, async (req, res) => {
  try {
    const [
      totalStudents,
      totalTests,
      totalResults,
      needsAttentionCount,
      departments,
      groups,
      recentResults,
    ] = await Promise.all([
      Student.countDocuments(),
      Test.countDocuments({ isActive: true }),
      TestResult.countDocuments({ isCompleted: true }),
      TestResult.countDocuments({ needsAttention: true, isReviewed: false }),
      Student.distinct("department"),
      Student.distinct("group"),
      TestResult.find({ isCompleted: true })
        .populate("student", "full_name student_id_number")
        .populate("test", "name code")
        .sort("-completedAt")
        .limit(10),
    ]);

    // Calculate completion statistics
    const completionStats = await TestResult.aggregate([
      { $match: { isCompleted: true } },
      {
        $group: {
          _id: "$test",
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "tests",
          localField: "_id",
          foreignField: "_id",
          as: "testInfo",
        },
      },
      { $unwind: "$testInfo" },
      {
        $project: {
          testName: "$testInfo.name",
          completionCount: "$count",
          completionRate: {
            $multiply: [{ $divide: ["$count", totalStudents] }, 100],
          },
        },
      },
    ]);

    res.json({
      success: true,
      data: {
        overview: {
          totalStudents,
          totalTests,
          totalResults,
          needsAttentionCount,
          totalDepartments: departments.length,
          totalGroups: groups.length,
          averageCompletionRate:
            Math.round((totalResults / (totalStudents * totalTests)) * 100) ||
            0,
        },
        completionStats,
        recentResults: recentResults.map((r) => ({
          id: r._id,
          studentName: r.student?.full_name,
          studentId: r.student?.student_id_number,
          testName: r.test?.name,
          completedAt: r.completedAt,
          needsAttention: r.needsAttention,
        })),
      },
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

// @route   GET /api/admin/faculties
// @desc    Get faculty statistics
// @access  Private (Admin)
router.get("/faculties", protect, adminOnly, async (req, res) => {
  try {
    const facultyStats = await Student.aggregate([
      {
        $group: {
          _id: "$department.name",
          departmentCode: { $first: "$department.code" },
          studentCount: { $sum: 1 },
          groups: { $addToSet: "$group.name" },
        },
      },
      {
        $lookup: {
          from: "testresults",
          let: { deptName: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$department.name", "$$deptName"] },
                isCompleted: true,
              },
            },
          ],
          as: "testResults",
        },
      },
      {
        $project: {
          name: "$_id",
          code: "$departmentCode",
          studentCount: 1,
          groupCount: { $size: "$groups" },
          completedTests: { $size: "$testResults" },
          averageCompletion: {
            $cond: {
              if: { $gt: ["$studentCount", 0] },
              then: {
                $multiply: [
                  {
                    $divide: [
                      { $size: "$testResults" },
                      { $multiply: ["$studentCount", 8] }, // 8 tests total
                    ],
                  },
                  100,
                ],
              },
              else: 0,
            },
          },
        },
      },
      { $sort: { studentCount: -1 } },
    ]);

    // Get test-specific statistics for each faculty
    const testStats = await TestResult.aggregate([
      { $match: { isCompleted: true } },
      {
        $group: {
          _id: {
            department: "$department.name",
            test: "$test",
          },
          count: { $sum: 1 },
          needsAttentionCount: {
            $sum: { $cond: ["$needsAttention", 1, 0] },
          },
        },
      },
      {
        $lookup: {
          from: "tests",
          localField: "_id.test",
          foreignField: "_id",
          as: "testInfo",
        },
      },
      { $unwind: "$testInfo" },
      {
        $group: {
          _id: "$_id.department",
          tests: {
            $push: {
              testName: "$testInfo.name",
              testCode: "$testInfo.code",
              completionCount: "$count",
              needsAttentionCount: "$needsAttentionCount",
            },
          },
        },
      },
    ]);

    // Merge test statistics with faculty statistics
    const mergedStats = facultyStats.map((faculty) => {
      const testData = testStats.find((t) => t._id === faculty.name);
      return {
        ...faculty,
        tests: testData?.tests || [],
      };
    });

    res.json({
      success: true,
      data: mergedStats,
    });
  } catch (error) {
    console.error("Faculty stats error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

// @route   GET /api/admin/groups
// @desc    Get group statistics
// @access  Private (Admin)
router.get("/groups", protect, adminOnly, async (req, res) => {
  try {
    const { department } = req.query;

    let matchStage = {};
    if (department) {
      matchStage = { "department.name": department };
    }

    const groupStats = await Student.aggregate([
      { $match: matchStage },
      {
        $group: {
          _id: "$group.name",
          groupId: { $first: "$group.id" },
          department: { $first: "$department.name" },
          level: { $first: "$level.name" },
          educationLang: { $first: "$group.educationLang.name" },
          studentCount: { $sum: 1 },
          students: {
            $push: {
              id: "$_id",
              name: "$full_name",
              studentId: "$student_id_number",
            },
          },
        },
      },
      {
        $lookup: {
          from: "testresults",
          let: { groupName: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$group.name", "$$groupName"] },
                isCompleted: true,
              },
            },
          ],
          as: "testResults",
        },
      },
      {
        $project: {
          name: "$_id",
          id: "$groupId",
          department: 1,
          level: 1,
          educationLang: 1,
          studentCount: 1,
          completedTests: { $size: "$testResults" },
          averageCompletion: {
            $cond: {
              if: { $gt: ["$studentCount", 0] },
              then: {
                $multiply: [
                  {
                    $divide: [
                      { $size: "$testResults" },
                      { $multiply: ["$studentCount", 8] },
                    ],
                  },
                  100,
                ],
              },
              else: 0,
            },
          },
        },
      },
      { $sort: { department: 1, name: 1 } },
    ]);

    res.json({
      success: true,
      data: groupStats,
    });
  } catch (error) {
    console.error("Group stats error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

// @route   GET /api/admin/students
// @desc    Get students list with filters
// @access  Private (Admin)
router.get("/students", protect, adminOnly, async (req, res) => {
  try {
    const {
      department,
      group,
      search,
      page = 1,
      limit = 50,
      needsAttention,
    } = req.query;

    let query = {};

    if (department) {
      query["department.name"] = department;
    }

    if (group) {
      query["group.name"] = group;
    }

    if (search) {
      query.$or = [
        { full_name: { $regex: search, $options: "i" } },
        { student_id_number: { $regex: search, $options: "i" } },
      ];
    }

    // If filtering by needs attention
    let studentIds = [];
    if (needsAttention === "true") {
      const attentionResults = await TestResult.distinct("student", {
        needsAttention: true,
        isReviewed: false,
      });
      studentIds = attentionResults;
      query._id = { $in: studentIds };
    }

    const students = await Student.find(query)
      .select("full_name student_id_number department group level image")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort("full_name");

    const totalCount = await Student.countDocuments(query);

    // Get test completion for each student
    const studentData = await Promise.all(
      students.map(async (student) => {
        const testResults = await TestResult.countDocuments({
          student: student._id,
          isCompleted: true,
        });

        const needsAttentionCount = await TestResult.countDocuments({
          student: student._id,
          needsAttention: true,
          isReviewed: false,
        });

        return {
          ...student.toObject(),
          completedTests: testResults,
          needsAttention: needsAttentionCount > 0,
          attentionCount: needsAttentionCount,
        };
      })
    );

    res.json({
      success: true,
      data: {
        students: studentData,
        pagination: {
          total: totalCount,
          page: parseInt(page),
          pages: Math.ceil(totalCount / limit),
        },
      },
    });
  } catch (error) {
    console.error("Get students error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

// @route   GET /api/admin/test-results
// @desc    Get all test results with filters
// @access  Private (Admin)
router.get("/test-results", protect, adminOnly, async (req, res) => {
  try {
    const {
      testId,
      department,
      group,
      needsAttention,
      startDate,
      endDate,
      search,
      page = 1,
      limit = 50,
    } = req.query;

    let query = { isCompleted: true };

    if (testId) {
      query.test = testId;
    }

    if (department) {
      query["department.name"] = department;
    }

    if (group) {
      query["group.name"] = group;
    }

    if (needsAttention === "true") {
      query.needsAttention = true;
      query.isReviewed = false;
    } else if (needsAttention === "false") {
      query.needsAttention = false;
    }

    if (startDate || endDate) {
      query.completedAt = {};
      if (startDate) {
        query.completedAt.$gte = new Date(startDate);
      }
      if (endDate) {
        query.completedAt.$lte = new Date(endDate);
      }
    }

    // Search by student name
    if (search) {
      const students = await Student.find({
        $or: [
          { full_name: { $regex: search, $options: "i" } },
          { student_id_number: { $regex: search, $options: "i" } },
        ],
      }).distinct("_id");

      if (students.length > 0) {
        query.student = { $in: students };
      } else {
        // If no students found with search term, return empty results
        return res.json({
          success: true,
          data: {
            results: [],
            pagination: {
              total: 0,
              page: parseInt(page),
              pages: 0,
            },
          },
        });
      }
    }

    const results = await TestResult.find(query)
      .populate("student", "full_name student_id_number department group")
      .populate("test", "name code isSensitive")
      .populate("reviewedBy", "fullName")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort("-completedAt");

    const totalCount = await TestResult.countDocuments(query);

    res.json({
      success: true,
      data: {
        results,
        pagination: {
          total: totalCount,
          page: parseInt(page),
          pages: Math.ceil(totalCount / limit),
        },
      },
    });
  } catch (error) {
    console.error("Get test results error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

// @route   GET /api/admin/test-results/:resultId
// @desc    Get single test result details
// @access  Private (Admin)
router.get("/test-results/:resultId", protect, adminOnly, async (req, res) => {
  try {
    const result = await TestResult.findById(req.params.resultId)
      .populate("student")
      .populate("test")
      .populate("reviewedBy", "fullName");

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Test natijasi topilmadi",
      });
    }

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Get test result detail error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

// @route   PUT /api/admin/test-results/:resultId/review
// @desc    Mark test result as reviewed and add notes
// @access  Private (Admin)
router.put(
  "/test-results/:resultId/review",
  protect,
  adminOnly,
  async (req, res) => {
    try {
      const { adminNotes } = req.body;

      const result = await TestResult.findById(req.params.resultId);

      if (!result) {
        return res.status(404).json({
          success: false,
          error: "Test natijasi topilmadi",
        });
      }

      result.isReviewed = true;
      result.reviewedBy = req.admin._id;
      result.reviewedAt = new Date();

      if (adminNotes) {
        result.adminNotes = adminNotes;
      }

      await result.save();

      res.json({
        success: true,
        message: "Test natijasi ko'rib chiqildi",
        data: result,
      });
    } catch (error) {
      console.error("Review test result error:", error);
      res.status(500).json({
        success: false,
        error: "Server xatosi",
      });
    }
  }
);

// @route   GET /api/admin/statistics/tests
// @desc    Get detailed test statistics
// @access  Private (Admin)
router.get("/statistics/tests", protect, adminOnly, async (req, res) => {
  try {
    const tests = await Test.find({ isActive: true });

    const testStatistics = await Promise.all(
      tests.map(async (test) => {
        const [
          totalCompleted,
          needsAttentionCount,
          departmentStats,
          scoreDistribution,
        ] = await Promise.all([
          TestResult.countDocuments({ test: test._id, isCompleted: true }),
          TestResult.countDocuments({
            test: test._id,
            needsAttention: true,
            isReviewed: false,
          }),
          TestResult.aggregate([
            { $match: { test: test._id, isCompleted: true } },
            {
              $group: {
                _id: "$department.name",
                count: { $sum: 1 },
              },
            },
            { $sort: { count: -1 } },
            { $limit: 5 },
          ]),
          TestResult.aggregate([
            { $match: { test: test._id, isCompleted: true } },
            {
              $group: {
                _id: "$interpretation.severity",
                count: { $sum: 1 },
              },
            },
          ]),
        ]);

        return {
          testId: test._id,
          testName: test.name,
          testCode: test.code,
          isSensitive: test.isSensitive,
          totalCompleted,
          needsAttentionCount,
          topDepartments: departmentStats,
          severityDistribution: scoreDistribution,
        };
      })
    );

    res.json({
      success: true,
      data: testStatistics,
    });
  } catch (error) {
    console.error("Test statistics error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

export default router;
