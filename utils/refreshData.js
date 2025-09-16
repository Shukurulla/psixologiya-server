import Student from "../models/Student.js";
import { fetchAllStudents } from "./hemisApi.js";

// Main function to refresh all student data from HEMIS
export const refreshHemisData = async () => {
  console.log("=".repeat(50));
  console.log("Starting HEMIS data synchronization...");
  console.log("=".repeat(50));

  try {
    // Fetch all students from HEMIS
    const result = await fetchAllStudents();

    if (!result.success) {
      throw new Error(`Failed to fetch HEMIS data: ${result.error}`);
    }

    const { students, totalCount } = result;

    console.log(`\nReceived ${totalCount} students from HEMIS`);

    // Validate data integrity
    if (students.length === 0) {
      throw new Error("No students received from HEMIS");
    }

    // Clear existing students collection
    console.log("\nClearing existing students collection...");
    await Student.deleteMany({});
    console.log("Existing students cleared");

    // Prepare students for bulk insert
    console.log("\nPreparing students for database insertion...");
    const studentsToInsert = students.map((student) => ({
      id: student.id,
      meta_id: student.meta_id,
      student_id_number: student.student_id_number,
      full_name: student.full_name,
      short_name: student.short_name,
      first_name: student.first_name,
      second_name: student.second_name,
      third_name: student.third_name,
      gender: student.gender,
      birth_date: student.birth_date,
      image: student.image,
      avg_gpa: student.avg_gpa || 0,
      avg_grade: student.avg_grade || 0,
      total_credit: student.total_credit || 0,
      country: student.country,
      province: student.province,
      currentProvince: student.currentProvince,
      district: student.district,
      currentDistrict: student.currentDistrict,
      terrain: student.terrain,
      currentTerrain: student.currentTerrain,
      citizenship: student.citizenship,
      studentStatus: student.studentStatus,
      _curriculum: student._curriculum,
      educationForm: student.educationForm,
      educationType: student.educationType,
      paymentForm: student.paymentForm,
      studentType: student.studentType,
      socialCategory: student.socialCategory,
      accommodation: student.accommodation,
      department: student.department,
      specialty: student.specialty,
      group: student.group,
      level: student.level,
      semester: student.semester,
      educationYear: student.educationYear,
      year_of_enter: student.year_of_enter,
      roommate_count: student.roommate_count,
      is_graduate: student.is_graduate || false,
      total_acload: student.total_acload,
      other: student.other,
      email: student.email || "",
      hash: student.hash,
      validateUrl: student.validateUrl,
      hemis_created_at: student.created_at,
      hemis_updated_at: student.updated_at,
    }));

    // Bulk insert students
    console.log("\nInserting students into database...");
    const insertResult = await Student.insertMany(studentsToInsert, {
      ordered: false, // Continue on error
      rawResult: true,
    });

    // Verify insertion
    const dbCount = await Student.countDocuments();
    console.log(`\nDatabase now contains ${dbCount} students`);

    if (dbCount !== totalCount) {
      console.warn(
        `Warning: Expected ${totalCount} students but have ${dbCount} in database`
      );
    }

    // Extract and log statistics
    const stats = await getStatistics();
    console.log("\n" + "=".repeat(50));
    console.log("Synchronization Statistics:");
    console.log("=".repeat(50));
    console.log(`Total Students: ${stats.totalStudents}`);
    console.log(`Total Departments: ${stats.totalDepartments}`);
    console.log(`Total Groups: ${stats.totalGroups}`);
    console.log(`Total Specialties: ${stats.totalSpecialties}`);
    console.log("=".repeat(50));
    console.log("HEMIS data synchronization completed successfully!");
    console.log("=".repeat(50));

    return {
      success: true,
      totalSynced: dbCount,
      statistics: stats,
    };
  } catch (error) {
    console.error("=".repeat(50));
    console.error("HEMIS data synchronization failed!");
    console.error("=".repeat(50));
    console.error("Error:", error.message);

    // Log more details if available
    if (error.writeErrors) {
      console.error(`Write errors: ${error.writeErrors.length}`);
    }

    return {
      success: false,
      error: error.message,
    };
  }
};

// Get statistics from synchronized data
const getStatistics = async () => {
  try {
    const [
      totalStudents,
      departments,
      groups,
      specialties,
      educationYears,
      genderStats,
    ] = await Promise.all([
      Student.countDocuments(),
      Student.distinct("department.name"),
      Student.distinct("group.name"),
      Student.distinct("specialty.name"),
      Student.distinct("educationYear.name"),
      Student.aggregate([
        { $group: { _id: "$gender.name", count: { $sum: 1 } } },
      ]),
    ]);

    return {
      totalStudents,
      totalDepartments: departments.length,
      totalGroups: groups.length,
      totalSpecialties: specialties.length,
      educationYears: educationYears.length,
      genderDistribution: genderStats.reduce((acc, item) => {
        acc[item._id || "Unknown"] = item.count;
        return acc;
      }, {}),
    };
  } catch (error) {
    console.error("Error getting statistics:", error);
    return null;
  }
};

export default refreshHemisData;
