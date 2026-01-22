import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.js";
import jwt from "jsonwebtoken";

// import { CategoryModel } from "../../database/schema/category.schema.js";

export const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });
  if (!user) return res.status(404).json({ message: "User not found" });

  const { password: userPassword, ...rest } = user.toObject();

  if (userPassword !== password) {
    console.log(userPassword, password);

    return res.status(401).json({ message: "Username or password wrong" });
  }

  const accessToken = jwt.sign({ user: rest }, "Secret");

  res.status(200).json({ user: rest, accessToken });
};
