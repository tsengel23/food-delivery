import type { RequestHandler } from "express";

// Зөвшөөрөгдсөн role-уудыг шалгана — authenticate middleware-ийн дараа хэрэглэнэ
export const authorize =
  (...roles: string[]): RequestHandler =>
  (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403).json({ success: false, message: "Forbidden: insufficient permissions" });
      return;
    }
    next();
  };
