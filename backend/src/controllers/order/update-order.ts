import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.js";

// Admin: захиалгын статус өөрчилнэ (pending → paid → delivered / cancelled)
export const updateOrder: RequestHandler = async (req, res, next) => {
  try {
    const order = await OrderModel.findByIdAndUpdate(
      req.params["id"],
      { status: req.body.status },
      { new: true, runValidators: true }
    );

    if (!order) {
      res.status(404).json({ success: false, message: "Order not found" });
      return;
    }

    res.status(200).json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
};
