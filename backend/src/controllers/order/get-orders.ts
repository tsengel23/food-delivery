import type { RequestHandler } from "express";

import { OrderModel } from "../../database/schema/order.schema.js";

export const getOrders: RequestHandler = async (req, res) => {
  const body = req.body;

  const orders = await OrderModel.find({});

  res.status(200).json(orders);
};
