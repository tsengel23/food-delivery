import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.js";

// Хэрэглэгч өөрийн мэдээллийг шинэчилнэ (email, profileImage, address)
export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params["id"], req.body, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};
