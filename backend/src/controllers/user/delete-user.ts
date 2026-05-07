import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.js";

// Admin: хэрэглэгч устгана
export const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params["id"]);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (err) {
    next(err);
  }
};
