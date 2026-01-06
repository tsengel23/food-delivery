import type { RequestHandler } from "express";

import { CategoryModel } from "../../database/schema/category.schema.js";

export const createCategory: RequestHandler = async (req, res) => {
  const body = req.body;

  const category = await CategoryModel.create({
    name: body.name,
  });

  res.status(201).json(category);
};

// try catch error handler-tai shinechilsen huvilbar!!!!!!
//
// import type { RequestHandler } from "express";
// import { createCategorySchema } from "../../validators/category.validator.js";
// import { createCategoryService } from "../../services/category.service.js";

// export const createCategory: RequestHandler = async (req, res, next) => {
//   try {
//     const parsed = createCategorySchema.parse(req.body);

//     const category = await createCategoryService(parsed.name);

//     res.status(201).json(category);
//   } catch (error) {
//     next(error);
//   }
// };
