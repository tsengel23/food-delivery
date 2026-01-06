import type { RequestHandler } from "express";

import { UserModel } from "../../database/schema/user.schema.js";

export const getUsers: RequestHandler = async (req, res) => {
  const body = req.body;

  const users = await UserModel.find({});

  res.status(200).json(users);
};
