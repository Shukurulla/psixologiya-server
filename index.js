import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import authRoutes from "./routes/auth.js";
import studentRoutes from "./routes/students.js";
import testRoutes from "./routes/tests.js";
import adminRoutes from "./routes/admin.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { initializeTests } from "./utils/initializeTests.js";

// Uncomment this line once to sync HEMIS data, then comment it back
// import { refreshHemisData } from "./utils/refreshData.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/admin", adminRoutes);

// Error handling middleware
app.use(errorHandler);

// Initialize server
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    // refreshHemisData();
    // Initialize tests in database
    await initializeTests();

    // Uncomment this line once to sync HEMIS data, then comment it back
    // await refreshHemisData();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    console.error("Server startup error:", error);
    process.exit(1);
  }
};

startServer();
