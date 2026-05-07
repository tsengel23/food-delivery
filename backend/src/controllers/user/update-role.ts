import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.js";

// Зөвхөн owner дуудаж болно — хэрэглэгчийн role өөрчилнэ
export const updateRole: RequestHandler = async (req, res, next) => {
  try {
    const { role } = req.body as { role: string };

    if (!["owner", "manager", "customer"].includes(role)) {
      res.status(400).json({ success: false, message: "Invalid role" });
      return;
    }

    // Owner өөрийнхөө role-г өөрчлөхийг хориглоно
    if (req.params["id"] === req.user?._id) {
      res.status(403).json({ success: false, message: "Cannot change your own role" });
      return;
    }

    const user = await UserModel.findByIdAndUpdate(
      req.params["id"],
      { role },
      { new: true }
    ).select("-password");

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};
