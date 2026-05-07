import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/index.js";

type JwtPayload = { _id: string; email: string; role: string };

// Authorization header-аас Bearer token уншиж, хэрэглэгчийг шалгана
export const authenticate: RequestHandler = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization?.startsWith("Bearer ")) {
    res.status(401).json({ success: false, message: "Unauthorized" });
    return;
  }

  const token = authorization.split(" ")[1];
  if (!token) {
    res.status(401).json({ success: false, message: "Unauthorized" });
    return;
  }

  try {
    const payload = jwt.verify(token, config.jwt.secret) as unknown as JwtPayload;
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
