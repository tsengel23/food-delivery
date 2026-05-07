import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

// Категорийн ID-аар тухайн категорид хамаарах хоолуудыг буцаана
export const getFoodsByCategoryId: RequestHandler = async (req, res, next) => {
  try {
    const foods = await FoodModel.find({ categoryIds: req.params["categoryId"] }).populate("categoryIds");
    res.status(200).json({ success: true, data: foods });
  } catch (err) {
    next(err);
  }
};
