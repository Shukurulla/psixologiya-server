import Test from "../models/Test.js";
import { PSYCHOLOGICAL_TESTS } from "../constants/tests.js";

export const initializeTests = async () => {
  try {
    console.log("Initializing psychological tests...");

    for (const test of PSYCHOLOGICAL_TESTS) {
      // Check if test already exists
      const existingTest = await Test.findOne({ code: test.code });

      if (!existingTest) {
        await Test.create(test);
        console.log(`Created test: ${test.name}`);
      } else {
        // Update existing test with latest data
        await Test.findOneAndUpdate({ code: test.code }, test, { new: true });
        console.log(`Updated test: ${test.name}`);
      }
    }

    console.log("All psychological tests initialized successfully");
  } catch (error) {
    console.error("Error initializing tests:", error);
    throw error;
  }
};
