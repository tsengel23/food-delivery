import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.js";

// Admin: захиалга устгана
export const deleteOrder: RequestHandler = async (req, res, next) => {
  try {
    const order = await OrderModel.findByIdAndDelete(req.params["id"]);
    if (!order) {
      res.status(404).json({ success: false, message: "Order not found" });
      return;
    }
    res.status(200).json({ success: true, message: "Order deleted" });
  } catch (err) {
    next(err);
  }
};
