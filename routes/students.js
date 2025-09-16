import express from "express";
import Student from "../models/Student.js";
import TestResult from "../models/TestResult.js";
import { protect, studentOnly } from "../middleware/auth.js";
import Test from "../models/Test.js";

const router = express.Router();

// @route   GET /api/students/profile
// @desc    Get current student profile
// @access  Private (Student)
router.get("/profile", protect, studentOnly, async (req, res) => {
  try {
    res.json({
      success: true,
      data: req.student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

// @route   GET /api/students/test-results
// @desc    Get student's test results
// @access  Private (Student)
router.get("/test-results", protect, studentOnly, async (req, res) => {
  try {
    const results = await TestResult.find({
      student: req.student._id,
    })
      .populate("test", "name code description isSensitive")
      .sort("-completedAt");

    // Filter out sensitive test details for students
    const filteredResults = results.map((result) => {
      const resultObj = result.toObject();

      // If test is sensitive, only show completion status
      if (resultObj.test?.isSensitive) {
        return {
          _id: resultObj._id,
          test: {
            name: resultObj.test.name,
            code: resultObj.test.code,
          },
          isCompleted: resultObj.isCompleted,
          completedAt: resultObj.completedAt,
          isSensitive: true,
          message: "Test natijalari ko'rib chiqilmoqda",
        };
      }

      return resultObj;
    });

    res.json({
      success: true,
      data: filteredResults,
    });
  } catch (error) {
    console.error("Get test results error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

// @route   GET /api/students/statistics
// @desc    Get student's personal statistics
// @access  Private (Student)
router.get("/statistics", protect, studentOnly, async (req, res) => {
  try {
    const [totalTests, completedTests, pendingTests, recentResults] =
      await Promise.all([
        Test.countDocuments({ isActive: true }),
        TestResult.countDocuments({
          student: req.student._id,
          isCompleted: true,
        }),
        Test.countDocuments({
          isActive: true,
          _id: {
            $nin: await TestResult.distinct("test", {
              student: req.student._id,
            }),
          },
        }),
        TestResult.find({
          student: req.student._id,
          isCompleted: true,
        })
          .populate("test", "name")
          .sort("-completedAt")
          .limit(5),
      ]);

    res.json({
      success: true,
      data: {
        totalTests,
        completedTests,
        pendingTests,
        completionRate:
          totalTests > 0 ? Math.round((completedTests / totalTests) * 100) : 0,
        recentResults: recentResults.map((r) => ({
          testName: r.test?.name,
          completedAt: r.completedAt,
        })),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server xatosi",
      message: error.message,
    });
  }
});

export default router;
