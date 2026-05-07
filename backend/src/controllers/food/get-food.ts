import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

// ID-аар нэг хоол буцаана
export const getFood: RequestHandler = async (req, res, next) => {
  try {
    const food = await FoodModel.findById(req.params["id"]).populate("categoryIds");
    if (!food) {
      res.status(404).json({ success: false, message: "Food not found" });
      return;
    }
    res.status(200).json({ success: true, data: food });
  } catch (err) {
    next(err);
  }
};
