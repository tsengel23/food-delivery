import type { RequestHandler } from "express";

import { UserModel } from "../../database/schema/user.schema.js";

export const createUser: RequestHandler = async (req, res) => {
  const body = req.body;

  const user = await UserModel.create({
    name: body.name,
  });

  res.status(201).json(user);
};
