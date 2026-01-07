import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error("🔥 RAW ERROR:", err);

  // 🟡 Zod validation error
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      errors: err.issues,
    });
  }

  // 🟡 Error object
  if (err instanceof Error) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }

  // 🔴 Error БИШ object орж ирсэн үед
  return res.status(500).json({
    success: false,
    message: "Unknown server error",
  });
};
