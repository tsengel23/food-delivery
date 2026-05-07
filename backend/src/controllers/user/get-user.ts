import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.js";

// ID-аар нэг хэрэглэгч буцаана — нууц үггүйгээр
export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params["id"]).select("-password");
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};
