import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

// Бүх хоолыг категоритой нь populate хийж буцаана
export const getFoods: RequestHandler = async (_req, res, next) => {
  try {
    const foods = await FoodModel.find().populate("categoryIds");
    res.status(200).json({ success: true, data: foods });
  } catch (err) {
    next(err);
  }
};
