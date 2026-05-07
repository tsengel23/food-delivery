import type { RequestHandler } from "express";

// Тохирох route олдохгүй үед 404 буцаана
export const notFound: RequestHandler = (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
};
