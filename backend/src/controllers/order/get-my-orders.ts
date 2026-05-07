import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.js";

export const getMyOrders: RequestHandler = async (req, res, next) => {
  try {
    const orders = await OrderModel.find({ userId: req.user?._id })
      .populate({ path: "orderItems.foodId", select: "name price image" })
      .populate({ path: "userId", select: "email" })
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    next(err);
  }
};
