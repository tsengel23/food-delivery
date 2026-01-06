import type { RequestHandler } from "express";

import { OrderModel } from "../../database/schema/order.schema.js";

export const createOrder: RequestHandler = async (req, res) => {
  const body = req.body;

  const order = await OrderModel.create({
    name: body.name,
  });

  res.status(201).json(order);
};
