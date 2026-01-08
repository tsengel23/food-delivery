import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

export const getFoodsByCategoryId: RequestHandler = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const foods = await FoodModel.find({
      categoryIds: categoryId, // MongoDB automatically checks array contains value
    }).populate("categoryIds");

    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch foods", error });
  }
};
