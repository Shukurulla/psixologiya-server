import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: String,
    instruction: String,
    questions: [
      {
        id: Number,
        text: String,
        options: [
          {
            value: String,
            label: String,
            score: Number,
          },
        ],
      },
    ],
    scoringMethod: {
      type: String,
      enum: ["sum", "custom", "category"],
      default: "sum",
    },
    interpretation: [
      {
        min: Number,
        max: Number,
        level: String,
        description: String,
        severity: String, // 'normal', 'mild', 'moderate', 'severe'
      },
    ],
    categories: [
      {
        name: String,
        questionIds: [Number],
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    isSensitive: {
      type: Boolean,
      default: false, // true for tests with suicide/self-harm content
    },
    order: Number,
    estimatedTime: Number, // in minutes
    reversedScoreQuestions: [Number], // Question IDs that need reversed scoring
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.model("Test", testSchema);

export default Test;
