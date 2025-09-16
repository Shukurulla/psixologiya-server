import jwt from "jsonwebtoken";
import Student from "../models/Student.js";
import Admin from "../models/Admin.js";

// Protect routes - verify JWT token
export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check if it's a student or admin
      if (decoded.role === "student") {
        req.student = await Student.findById(decoded.id).select("-__v");
        if (!req.student) {
          return res.status(401).json({
            success: false,
            error: "Student not found",
          });
        }
      } else if (decoded.role === "admin") {
        req.admin = await Admin.findById(decoded.id).select("-password");
        if (!req.admin) {
          return res.status(401).json({
            success: false,
            error: "Admin not found",
          });
        }
      }

      req.userRole = decoded.role;
      next();
    } catch (error) {
      console.error("Auth middleware error:", error.message);
      res.status(401).json({
        success: false,
        error: "Not authorized",
      });
    }
  } else {
    res.status(401).json({
      success: false,
      error: "Not authorized, no token",
    });
  }
};

// Admin only middleware
export const adminOnly = async (req, res, next) => {
  if (req.userRole === "admin" && req.admin) {
    next();
  } else {
    res.status(403).json({
      success: false,
      error: "Admin access only",
    });
  }
};

// Student only middleware
export const studentOnly = async (req, res, next) => {
  if (req.userRole === "student" && req.student) {
    next();
  } else {
    res.status(403).json({
      success: false,
      error: "Student access only",
    });
  }
};

// Generate JWT token
export const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });
};
