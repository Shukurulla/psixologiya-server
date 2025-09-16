import { PSYCHOLOGICAL_TESTS, isSensitiveTest } from "../constants/tests.js";

// Calculate test scores based on answers
export const calculateTestScore = (testCode, answers) => {
  const test = PSYCHOLOGICAL_TESTS.find((t) => t.code === testCode);

  if (!test) {
    throw new Error("Test not found");
  }

  let scores = {};
  let interpretation = null;

  switch (test.scoringMethod) {
    case "sum":
      scores = calculateSumScore(test, answers);
      break;
    case "custom":
      scores = calculateCustomScore(test, answers);
      break;
    case "category":
      scores = calculateCategoryScore(test, answers);
      break;
    default:
      scores = calculateSumScore(test, answers);
  }

  // Get interpretation based on scores
  interpretation = getInterpretation(test, scores);

  // Check if result needs attention (for sensitive tests)
  const needsAttention = checkNeedsAttention(test, scores, interpretation);

  return {
    scores,
    interpretation,
    needsAttention,
    isSensitive: isSensitiveTest(testCode),
  };
};

// Simple sum scoring
const calculateSumScore = (test, answers) => {
  let total = 0;

  answers.forEach((answer) => {
    const question = test.questions.find((q) => q.id === answer.questionId);
    if (question) {
      const option = question.options.find((o) => o.value === answer.answer);
      if (option) {
        total += option.score || 0;
      }
    }
  });

  return { total };
};

// Custom scoring (for tests with reversed questions)
const calculateCustomScore = (test, answers) => {
  let total = 0;

  answers.forEach((answer) => {
    const question = test.questions.find((q) => q.id === answer.questionId);
    if (question) {
      const option = question.options.find((o) => o.value === answer.answer);
      if (option) {
        // Check if this question needs reversed scoring
        if (
          test.reversedScoreQuestions &&
          test.reversedScoreQuestions.includes(question.id)
        ) {
          // Score is already reversed in the options for these questions
          total += option.score || 0;
        } else {
          total += option.score || 0;
        }
      }
    }
  });

  return { total };
};

// Category scoring (for tests with multiple categories)
const calculateCategoryScore = (test, answers) => {
  const categories = {};
  let total = 0;

  // Initialize categories
  test.categories.forEach((cat) => {
    categories[cat.name] = 0;
  });

  answers.forEach((answer) => {
    const question = test.questions.find((q) => q.id === answer.questionId);
    if (question) {
      const option = question.options.find((o) => o.value === answer.answer);
      if (option) {
        const score = option.score || 0;
        total += score;

        // Find which category this question belongs to
        const category = test.categories.find((cat) =>
          cat.questionIds.includes(question.id)
        );

        if (category) {
          categories[category.name] += score;
        }
      }
    }
  });

  return {
    total,
    categories,
    dominantCategory: Object.entries(categories).reduce((a, b) =>
      categories[a] > categories[b] ? a : b
    )[0],
  };
};

// Get interpretation based on scores
const getInterpretation = (test, scores) => {
  let interpretation = null;

  // For category-based tests (like HADS)
  if (test.scoringMethod === "category" && test.code === "HADS") {
    const anxietyScore = scores.categories.anxiety || 0;
    const depressionScore = scores.categories.depression || 0;

    const anxietyLevel = getHADSLevel(anxietyScore);
    const depressionLevel = getHADSLevel(depressionScore);

    interpretation = {
      anxiety: anxietyLevel,
      depression: depressionLevel,
      overall: {
        level:
          anxietyLevel.severity === "severe" ||
          depressionLevel.severity === "severe"
            ? "Og'ir"
            : anxietyLevel.severity === "mild" ||
              depressionLevel.severity === "mild"
            ? "O'rta"
            : "Normal",
        description: `Xavotir: ${anxietyLevel.description}, Depressiya: ${depressionLevel.description}`,
      },
    };
  }
  // For temperament test
  else if (test.code === "TEMPERAMENT") {
    const dominant = Object.entries(scores.categories).reduce(
      (max, [key, value]) => (value > max.value ? { name: key, value } : max),
      { name: "", value: 0 }
    );

    const temperamentNames = {
      choleric: "Xolerik",
      sanguine: "Sangvinik",
      phlegmatic: "Flegmatik",
      melancholic: "Melanxolik",
    };

    interpretation = {
      level: temperamentNames[dominant.name] || "Noaniq",
      description: `Dominant temperament tipi: ${
        temperamentNames[dominant.name]
      } (${dominant.value}/20 ball)`,
      severity: "normal",
      scores: scores.categories,
    };
  }
  // For psychogeometric test
  else if (test.code === "PSYCHOGEOMETRIC") {
    const shapes = [
      "Kvadrat",
      "To'g'ri to'rtburchak",
      "Uchburchak",
      "Aylana",
      "Zigzag",
    ];
    const shapeScores = {};

    test.questions.forEach((q, index) => {
      const answer = scores[`question_${q.id}`];
      if (answer) {
        shapeScores[shapes[index]] = answer;
      }
    });

    const dominant = Object.entries(shapeScores).reduce(
      (max, [key, value]) => (value > max.value ? { name: key, value } : max),
      { name: "", value: 0 }
    );

    interpretation = {
      level: dominant.name,
      description:
        test.interpretation.find((i) => i.shape === dominant.name.toLowerCase())
          ?.description || "",
      severity: "normal",
    };
  }
  // For standard scoring tests
  else {
    const score = scores.total || 0;
    interpretation = test.interpretation.find(
      (i) => score >= i.min && score <= i.max
    );

    if (!interpretation) {
      interpretation = {
        level: "Noaniq",
        description: "Natija aniqlanmadi",
        severity: "normal",
      };
    }
  }

  return interpretation;
};

// Helper function for HADS scoring
const getHADSLevel = (score) => {
  if (score >= 0 && score <= 7) {
    return {
      level: "Normal",
      description: "Me'yor",
      severity: "normal",
    };
  } else if (score >= 8 && score <= 10) {
    return {
      level: "Subklinik",
      description: "Subklinik daraja",
      severity: "mild",
    };
  } else {
    return {
      level: "Klinik",
      description: "Klinik daraja",
      severity: "severe",
    };
  }
};

// Check if test result needs immediate attention
const checkNeedsAttention = (test, scores, interpretation) => {
  // Check for severe depression
  if (test.code === "SUNG_DEPRESSION" && scores.total >= 70) {
    return true;
  }

  // Check for severe anxiety or depression in HADS
  if (test.code === "HADS") {
    const anxietyScore = scores.categories?.anxiety || 0;
    const depressionScore = scores.categories?.depression || 0;
    if (anxietyScore >= 11 || depressionScore >= 11) {
      return true;
    }
  }

  // Check for severe loneliness
  if (test.code === "LONELINESS_KORCHAGIN" && scores.total >= 39) {
    return true;
  }

  if (test.code === "LONELINESS_RUSSELL" && scores.total >= 40) {
    return true;
  }

  // Check for severe neurasthenia
  if (test.code === "NEURASTHENIA" && scores.total >= 9) {
    return true;
  }

  return false;
};

export default calculateTestScore;
