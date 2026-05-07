import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

// Бүх алдааг нэг газраас барьж, нэг хэлбэртэй response буцаана
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Zod validation алдаа — 400 Bad Request
  if (err instanceof ZodError) {
    res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.issues.map((i) => ({ field: i.path.join("."), message: i.message })),
    });
    return;
  }

  // Бусад алдаа — 500 Internal Server Error
  const message = err instanceof Error ? err.message : "Unknown server error";
  console.error("🔥 SERVER ERROR:", err);
  res.status(500).json({ success: false, message });
};
