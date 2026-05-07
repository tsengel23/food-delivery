import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.js";

// ID-аар нэг захиалга буцаана — customer зөвхөн өөрийнхийг харна
export const getOrder: RequestHandler = async (req, res, next) => {
  try {
    const order = await OrderModel.findById(req.params["id"])
      .populate({ path: "orderItems.foodId", select: "name price image" })
      .populate({ path: "userId", select: "email" });

    if (!order) {
      res.status(404).json({ success: false, message: "Order not found" });
      return;
    }

    // Customer өөрийнхийг л харж чадна
    const isOwner = order.userId.toString() === req.user?._id;
    const isStaff = ["owner", "manager"].includes(req.user?.role ?? "");
    if (!isStaff && !isOwner) {
      res.status(403).json({ success: false, message: "Forbidden" });
      return;
    }

    res.status(200).json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
};
