import axios from "axios";

const HEMIS_API_URL =
  process.env.HEMIS_API_URL || "https://student.karsu.uz/rest/v1";
const HEMIS_TOKEN = process.env.HEMIS_BEARER_TOKEN;

// Create axios instance with default config
const hemisApi = axios.create({
  baseURL: HEMIS_API_URL,
  headers: {
    Authorization: `Bearer ${HEMIS_TOKEN}`,
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30 seconds timeout
});

// Verify student login credentials via HEMIS
export const verifyStudentLogin = async (login, password) => {
  try {
    const response = await axios.post(`${HEMIS_API_URL}/auth/login`, {
      login: login,
      password: password,
    });

    if (response.data.success && response.data.data.token) {
      return {
        success: true,
        token: response.data.data.token,
      };
    }

    return {
      success: false,
      error: response.data.error || "Login yoki parol xato",
    };
  } catch (error) {
    console.error(
      "HEMIS login verification error:",
      error.response?.data || error.message
    );
    return {
      success: false,
      error:
        error.response?.data?.error || "Login tekshirishda xatolik yuz berdi",
    };
  }
};

// Fetch all students from HEMIS with pagination
export const fetchAllStudents = async () => {
  const maxLimit = 200;
  let allStudents = [];
  let page = 1;
  let totalCount = 0;

  try {
    console.log("Starting HEMIS data fetch...");

    // First request to get total count
    const firstResponse = await hemisApi.get("/data/student-list", {
      params: { limit: maxLimit, page: 1 },
      headers: {
        Authorization: "Bearer erkFR_9u2IOFoaGxYQPDmjmXVe6Oqv3s",
      },
    });

    if (!firstResponse.data.success) {
      throw new Error("Failed to fetch initial data from HEMIS");
    }

    totalCount = firstResponse.data.data.pagination.totalCount;
    const pageCount = firstResponse.data.data.pagination.pageCount;

    console.log(`Total students in HEMIS: ${totalCount}, Pages: ${pageCount}`);

    // Add first page students
    allStudents = [...firstResponse.data.data.items];

    // Fetch remaining pages with delay to avoid rate limiting
    for (page = 2; page <= pageCount; page++) {
      console.log(`Fetching page ${page} of ${pageCount}...`);

      // Add delay between requests
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await hemisApi.get("/data/student-list", {
        params: { limit: maxLimit, page },
        headers: {
          Authorization: "Bearer erkFR_9u2IOFoaGxYQPDmjmXVe6Oqv3s",
        },
      });

      if (response.data.success) {
        allStudents = [...allStudents, ...response.data.data.items];
      } else {
        console.error(`Failed to fetch page ${page}`);
      }
    }

    console.log(
      `Successfully fetched ${allStudents.length} students from HEMIS`
    );

    // Verify we got all students
    if (allStudents.length !== totalCount) {
      console.warn(
        `Warning: Expected ${totalCount} students but got ${allStudents.length}`
      );
    }

    return {
      success: true,
      students: allStudents,
      totalCount: allStudents.length,
    };
  } catch (error) {
    console.error("Error fetching HEMIS data:", error.message);
    return {
      success: false,
      error: error.message,
      students: allStudents,
      totalCount: allStudents.length,
    };
  }
};

export default hemisApi;
