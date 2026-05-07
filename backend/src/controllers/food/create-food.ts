import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

// Шинэ хоол үүсгэнэ — validate middleware-аар дамжиж ирнэ
export const createFood: RequestHandler = async (req, res, next) => {
  try {
    const food = await FoodModel.create(req.body);
    const populated = await food.populate("categoryIds");
    res.status(201).json({ success: true, data: populated });
  } catch (err) {
    next(err);
  }
};
