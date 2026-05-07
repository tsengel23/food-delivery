import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

// Категорид хамаарах хоолын тоог буцаана
export const getFoodCountByCategory: RequestHandler = async (req, res, next) => {
  try {
    const count = await FoodModel.countDocuments({ categoryIds: req.params["categoryId"] });
    res.status(200).json({ success: true, data: { count } });
  } catch (err) {
    next(err);
  }
};
