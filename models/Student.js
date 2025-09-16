import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    meta_id: Number,
    student_id_number: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    full_name: {
      type: String,
      required: true,
    },
    short_name: String,
    first_name: String,
    second_name: String,
    third_name: String,
    gender: {
      code: String,
      name: String,
    },
    birth_date: Number,
    image: String,
    avg_gpa: Number,
    avg_grade: Number,
    total_credit: Number,
    country: {
      code: String,
      name: String,
    },
    province: {
      code: String,
      name: String,
      _parent: String,
    },
    currentProvince: {
      code: String,
      name: String,
      _parent: String,
    },
    district: {
      code: String,
      name: String,
      _parent: String,
    },
    currentDistrict: {
      code: String,
      name: String,
      _parent: String,
    },
    terrain: {
      code: String,
      name: String,
    },
    currentTerrain: {
      code: String,
      name: String,
    },
    citizenship: {
      code: String,
      name: String,
    },
    studentStatus: {
      code: String,
      name: String,
    },
    _curriculum: Number,
    educationForm: {
      code: String,
      name: String,
    },
    educationType: {
      code: String,
      name: String,
    },
    paymentForm: {
      code: String,
      name: String,
    },
    studentType: {
      code: String,
      name: String,
    },
    socialCategory: {
      code: String,
      name: String,
    },
    accommodation: {
      code: String,
      name: String,
    },
    department: {
      id: Number,
      name: String,
      code: String,
      structureType: {
        code: String,
        name: String,
      },
      localityType: {
        code: String,
        name: String,
      },
      parent: mongoose.Schema.Types.Mixed,
      active: Boolean,
    },
    specialty: {
      id: Number,
      code: String,
      name: String,
    },
    group: {
      id: Number,
      name: String,
      educationLang: {
        code: String,
        name: String,
      },
    },
    level: {
      code: String,
      name: String,
    },
    semester: {
      id: Number,
      code: String,
      name: String,
    },
    educationYear: {
      code: String,
      name: String,
      current: Boolean,
    },
    year_of_enter: Number,
    roommate_count: Number,
    is_graduate: Boolean,
    total_acload: Number,
    other: String,
    email: String,
    hash: String,
    validateUrl: String,
    hemis_created_at: Number,
    hemis_updated_at: Number,
  },
  {
    timestamps: true,
  }
);

// Indexes for better query performance
studentSchema.index({ "department.id": 1 });
studentSchema.index({ "group.id": 1 });
studentSchema.index({ "educationYear.code": 1 });

const Student = mongoose.model("Student", studentSchema);

export default Student;
