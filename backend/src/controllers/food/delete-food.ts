import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

// ID-аар хоол устгана
export const deleteFood: RequestHandler = async (req, res, next) => {
  try {
    const food = await FoodModel.findByIdAndDelete(req.params["id"]);
    if (!food) {
      res.status(404).json({ success: false, message: "Food not found" });
      return;
    }
    res.status(200).json({ success: true, message: "Food deleted" });
  } catch (err) {
    next(err);
  }
};
