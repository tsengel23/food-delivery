import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.js";

// authenticate middleware-ийн дараа req.user-аас ID авч DB-с хэрэглэгч буцаана
export const getMe: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user?._id).select("-password");
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.status(200).json({ success: true, data: { user } });
  } catch (err) {
    next(err);
  }
};
