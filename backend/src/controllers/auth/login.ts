import type { RequestHandler } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../../database/schema/user.schema.js";
import { config } from "../../config/index.js";

// Нэвтрэх — bcrypt-ээр нууц үг шалгаж, JWT token буцаана
export const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body as { email: string; password: string };

    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(401).json({ success: false, message: "Invalid email or password" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ success: false, message: "Invalid email or password" });
      return;
    }

    const { password: _, ...safeUser } = user.toObject();
    const token = jwt.sign(
      { _id: safeUser._id, email: safeUser.email, role: safeUser.role },
      config.jwt.secret,
      { expiresIn: config.jwt.expiresIn as "7d" }
    );

    res.status(200).json({ success: true, data: { user: safeUser, accessToken: token } });
  } catch (err) {
    next(err);
  }
};
