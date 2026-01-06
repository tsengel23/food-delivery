import type { RequestHandler } from "express";

import { CategoryModel } from "../../database/schema/category.schema.js";

export const getCategories: RequestHandler = async (req, res) => {
  const body = req.body;

  const categories = await CategoryModel.find({});

  res.status(200).json(categories);
};

// try catch error handler-tai shinechilsen huvilbar!!!!!!
//
// export const getCategories: RequestHandler = async (req, res, next) => {
//   try {
//     const categories = await getCategoriesService();
//     res.json(categories);
//   } catch (e) {
//     next(e);
//   }
// };
