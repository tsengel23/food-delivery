import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

// ID-аар хоол олж, validate хийгдсэн өгөгдлөөр шинэчилнэ
export const updateFood: RequestHandler = async (req, res, next) => {
  try {
    const food = await FoodModel.findByIdAndUpdate(req.params["id"], req.body, {
      new: true,
      runValidators: true,
    }).populate("categoryIds");

    if (!food) {
      res.status(404).json({ success: false, message: "Food not found" });
      return;
    }
    res.status(200).json({ success: true, data: food });
  } catch (err) {
    next(err);
  }
};
