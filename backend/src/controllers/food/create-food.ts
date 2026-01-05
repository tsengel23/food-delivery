import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

export const createFoods: RequestHandler = async (req, res) => {
  const body = req.body;

  // const food = await FoodModel.create({
  //   name: body.name,
  //   price: body.price,
  //   image: body.image,
  //   ingredients: body.ingredients,
  //   categoryIds: body.categoryIds,
  // });

  const food = await FoodModel.insertMany(body);

  res.status(201).json(food);
};
