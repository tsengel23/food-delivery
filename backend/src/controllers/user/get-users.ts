import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.js";

// Admin: бүх хэрэглэгчийг буцаана — нууц үггүйгээр
export const getUsers: RequestHandler = async (_req, res, next) => {
  try {
    const users = await UserModel.find().select("-password");
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    next(err);
  }
};
