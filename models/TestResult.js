import mongoose from "mongoose";

const testResultSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    test: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test",
      required: true,
    },
    answers: [
      {
        questionId: Number,
        answer: mongoose.Schema.Types.Mixed,
        score: Number,
      },
    ],
    scores: {
      total: Number,
      categories: [
        {
          name: String,
          score: Number,
          maxScore: Number,
          percentage: Number,
        },
      ],
    },
    interpretation: {
      level: String,
      description: String,
      severity: String,
      recommendations: [String],
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    completedAt: Date,
    academicYear: String,
    semester: Number,
    department: {
      id: Number,
      name: String,
      code: String,
    },
    group: {
      id: Number,
      name: String,
    },
    needsAttention: {
      type: Boolean,
      default: false, // Flag for concerning results
    },
    adminNotes: String,
    isReviewed: {
      type: Boolean,
      default: false,
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    reviewedAt: Date,
  },
  {
    timestamps: true,
  }
);

// Compound index to prevent duplicate test submissions
testResultSchema.index(
  { student: 1, test: 1, academicYear: 1, semester: 1 },
  { unique: true }
);
testResultSchema.index({ "department.id": 1 });
testResultSchema.index({ "group.id": 1 });
testResultSchema.index({ needsAttention: 1 });
testResultSchema.index({ completedAt: -1 });

const TestResult = mongoose.model("TestResult", testResultSchema);

export default TestResult;
