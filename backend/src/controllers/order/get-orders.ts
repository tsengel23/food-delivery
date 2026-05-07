import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.js";

// Admin: бүх захиалга буцаана | Customer: зөвхөн өөрийнхийг харна
export const getOrders: RequestHandler = async (req, res, next) => {
  try {
    const isStaff = ["owner", "manager"].includes(req.user?.role ?? "");
    const filter = isStaff ? {} : { userId: req.user?._id };

    const orders = await OrderModel.find(filter)
      .populate({ path: "orderItems.foodId", select: "name price image" })
      .populate({ path: "userId", select: "email" })
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    next(err);
  }
};
