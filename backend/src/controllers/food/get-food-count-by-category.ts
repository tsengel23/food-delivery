import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

export const getFoodCountByCategory: RequestHandler = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const foods = await FoodModel.find({
      categoryIds: categoryId,
    });

    res.status(200).json({
      count: foods.length,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch foods", error });
  }
};
