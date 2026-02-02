import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

export const createFoods: RequestHandler = async (req, res) => {
  try {
    const body = req.body;
    // ✅ 1) нэг хоол create хийхээр стандартчилна
    const created = await FoodModel.create({
      name: body.name,
      price: Number(body.price),
      image: body.image,
      ingredients: body.ingredients,
      categoryIds: body.categoryIds,
    });

    // ✅ 2) frontend-д хэрэгтэй бол populate хийгээд буцаая
    const populated = await FoodModel.findById(created._id).populate(
      "categoryIds",
    );

    return res.status(201).json(populated);
  } catch (err) {
    console.error("Create food error:", err);
    return res.status(500).json({ message: "Create food failed" });
  }
};
