import type { RequestHandler } from "express";
import bcrypt from "bcryptjs";
import { UserModel } from "../../database/schema/user.schema.js";

// Шинэ хэрэглэгч бүртгэнэ — нууц үгийг bcrypt-ээр hash хийж хадгална
export const register: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body as { email: string; password: string };

    const existing = await UserModel.findOne({ email });
    if (existing) {
      res.status(409).json({ success: false, message: "Email already in use" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({ email, password: hashedPassword });
    const { password: _, ...safeUser } = user.toObject();

    res.status(201).json({ success: true, data: safeUser });
  } catch (err) {
    next(err);
  }
};
