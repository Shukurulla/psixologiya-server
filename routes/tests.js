import express from "express";
import Test from "../models/Test.js";
import TestResult from "../models/TestResult.js";
import { protect, studentOnly } from "../middleware/auth.js";
import { calculateTestScore } from "../utils/testCalculations.js";

const router = express.Router();

// @route   GET /api/tests
// @desc    Get all active tests
// @access  Private (Student)
router.get("/", protect, studentOnly, async (req, res) => {
  try {
    const tests = await Test.find({ isActive: true })
      .select("-questions -interpretation")
      .sort("order");

    // Get completed tests for this student
    const completedTests = await TestResult.find({
      student: req.student._id,
      isCompleted: true,
    }).distinct("test");

    // Mark which tests are completed
    const testsWithStatus = tests.map((test) => ({
      ...test.toObject(),
      isCompleted: completedTests.some(
        (ct) => ct.toString() === test._id.toString()
      ),
      canRetake: false, // Students cannot retake tests in same semester
    }));

    res.json({
      success: true,
      data: testsWithStatus,
    });
  } catch (error) {
    console.error("Get tests error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

// @route   GET /api/tests/:testId
// @desc    Get single test with questions
// @access  Private (Student)
router.get("/:testId", protect, studentOnly, async (req, res) => {
  try {
    const test = await Test.findById(req.params.testId);

    if (!test) {
      return res.status(404).json({
        success: false,
        error: "Test topilmadi",
      });
    }

    // Check if already completed
    const existingResult = await TestResult.findOne({
      student: req.student._id,
      test: test._id,
      academicYear: req.student.educationYear.code,
      semester: req.student.semester.code,
      isCompleted: true,
    });

    if (existingResult) {
      return res.status(400).json({
        success: false,
        error: "Siz bu testni allaqachon topshirgansiz",
      });
    }

    // Don't send interpretation data to client
    const { interpretation, ...testData } = test.toObject();

    res.json({
      success: true,
      data: testData,
    });
  } catch (error) {
    console.error("Get test error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

// @route   POST /api/tests/:testId/submit
// @desc    Submit test answers
// @access  Private (Student)
router.post("/:testId/submit", protect, studentOnly, async (req, res) => {
  try {
    const { answers } = req.body;
    const testId = req.params.testId;

    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({
        success: false,
        error: "Javoblar yuborilmadi",
      });
    }

    // Get test
    const test = await Test.findById(testId);

    if (!test) {
      return res.status(404).json({
        success: false,
        error: "Test topilmadi",
      });
    }

    // Check if all questions are answered
    if (answers.length !== test.questions.length) {
      return res.status(400).json({
        success: false,
        error: "Barcha savollarga javob berilishi shart",
      });
    }

    // Check if already submitted
    const existingResult = await TestResult.findOne({
      student: req.student._id,
      test: testId,
      academicYear: req.student.educationYear.code,
      semester: req.student.semester.code,
    });

    if (existingResult && existingResult.isCompleted) {
      return res.status(400).json({
        success: false,
        error: "Siz bu testni allaqachon topshirgansiz",
      });
    }

    // Calculate scores
    const { scores, interpretation, needsAttention, isSensitive } =
      calculateTestScore(test.code, answers);

    // Create or update test result
    const testResult =
      existingResult ||
      new TestResult({
        student: req.student._id,
        test: testId,
        academicYear: req.student.educationYear.code,
        semester: req.student.semester.code,
        department: req.student.department,
        group: req.student.group,
      });

    testResult.answers = answers.map((a) => ({
      questionId: a.questionId,
      answer: a.answer,
      score: a.score || 0,
    }));
    testResult.scores = scores;
    testResult.interpretation = interpretation;
    testResult.needsAttention = needsAttention;
    testResult.isCompleted = true;
    testResult.completedAt = new Date();

    await testResult.save();

    // Prepare response
    let responseData = {
      success: true,
      message: "Test muvaffaqiyatli topshirildi",
      testId: testResult._id,
      isCompleted: true,
    };

    // If not sensitive test, include results
    if (!isSensitive) {
      responseData.result = {
        scores,
        interpretation: {
          level: interpretation.level,
          description: interpretation.description,
        },
      };
    } else {
      responseData.message = "Test topshirildi. Natijalar ko'rib chiqilmoqda";
    }

    res.json(responseData);
  } catch (error) {
    console.error("Submit test error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

// @route   GET /api/tests/:testId/result
// @desc    Get test result
// @access  Private (Student)
router.get("/:testId/result", protect, studentOnly, async (req, res) => {
  try {
    const result = await TestResult.findOne({
      student: req.student._id,
      test: req.params.testId,
      isCompleted: true,
    }).populate("test", "name code isSensitive");

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Test natijasi topilmadi",
      });
    }

    // If test is sensitive, don't show detailed results to student
    if (result.test.isSensitive) {
      return res.json({
        success: true,
        data: {
          testName: result.test.name,
          isCompleted: true,
          completedAt: result.completedAt,
          message: "Test natijalari ko'rib chiqilmoqda",
          isSensitive: true,
        },
      });
    }

    res.json({
      success: true,
      data: {
        testName: result.test.name,
        scores: result.scores,
        interpretation: result.interpretation,
        completedAt: result.completedAt,
      },
    });
  } catch (error) {
    console.error("Get test result error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

export default router;
