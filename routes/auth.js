import express from "express";
import Student from "../models/Student.js";
import Admin from "../models/Admin.js";
import { verifyStudentLogin } from "../utils/hemisApi.js";
import { generateToken } from "../middleware/auth.js";
import bcryptjs from "bcryptjs";

const router = express.Router();

// @route   POST /api/auth/student-login
// @desc    Student login via HEMIS credentials
// @access  Public
router.post("/student-login", async (req, res) => {
  try {
    const { student_id_number, password } = req.body;

    if (!student_id_number || !password) {
      return res.status(400).json({
        success: false,
        error: "Student ID va parol kiritish shart",
      });
    }

    // Verify credentials with HEMIS
    const hemisResult = await verifyStudentLogin(student_id_number, password);

    if (!hemisResult.success) {
      return res.status(401).json({
        success: false,
        error: hemisResult.error || "Login yoki parol xato",
      });
    }

    // Find student in database
    const student = await Student.findOne({ student_id_number });

    if (!student) {
      return res.status(404).json({
        success: false,
        error: "Talaba topilmadi. Admin bilan bog'laning",
      });
    }

    // Generate JWT token
    const token = generateToken(student._id, "student");

    res.json({
      success: true,
      data: {
        token,
        student: {
          id: student._id,
          student_id_number: student.student_id_number,
          full_name: student.full_name,
          department: student.department,
          group: student.group,
          level: student.level,
          image: student.image,
        },
      },
    });
  } catch (error) {
    console.error("Student login error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

// @route   POST /api/auth/admin-login
// @desc    Admin login
// @access  Public
router.post("/admin-login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        error: "Username va parol kiritish shart",
      });
    }

    // Find admin
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({
        success: false,
        error: "Login yoki parol xato",
      });
    }

    // Check password
    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: "Login yoki parol xato",
      });
    }

    // Update last login
    admin.lastLogin = new Date();
    admin.loginHistory.push({
      date: new Date(),
      ip: req.ip,
    });
    await admin.save();

    // Generate token
    const token = generateToken(admin._id, "admin");

    res.json({
      success: true,
      data: {
        token,
        admin: {
          id: admin._id,
          username: admin.username,
          fullName: admin.fullName,
          email: admin.email,
          role: admin.role,
        },
      },
    });
  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({
      success: false,
      error: "Server xatosi",
    });
  }
});

// @route   POST /api/auth/admin-register
// @desc    Register new admin (only for super admin)
// @access  Private (Super Admin)
router.post("/admin-register", async (req, res) => {
  try {
    const { username, password, fullName, email, role } = req.body;

    // Check if admin exists
    const adminExists = await Admin.findOne({ $or: [{ username }, { email }] });

    if (adminExists) {
      return res.status(400).json({
        success: false,
        error: "Admin allaqachon mavjud",
      });
    }

    // Create admin
    const admin = await Admin.create({
      username,
      password,
      fullName,
      email,
      role: role || "admin",
    });

    res.status(201).json({
      success: true,
      data: {
        id: admin._id,
        username: admin.username,
        fullName: admin.fullName,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Admin registration error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Server xatosi",
    });
  }
});

export default router;
