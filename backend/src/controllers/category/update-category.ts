import type { RequestHandler } from "express";

import { CategoryModel } from "../../database/schema/category.schema.js";

export const updateCategory: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const updateCategory = await CategoryModel.findByIdAndUpdate(
    id,
    { name: body.name },
    { new: true } //<---- shinechilsen data-g butsaana !!!
  );

  if (!updateCategory) {
    //<--hervee bhgui bol [404]!!
    return res.status(404).json({ message: "Category not found" });
  }
  res.status(200).json(updateCategory);
};

// try catch error handler-tai shinechilsen huvilbar!!!!!!
//
// import type { RequestHandler } from "express";
// import { updateCategorySchema } from "../../validators/category.validator.js";
// import { updateCategoryService } from "../../services/category.service.js";

// export const updateCategory: RequestHandler = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const parsed = updateCategorySchema.parse(req.body);

//     const category = await updateCategoryService(id, parsed.name);

//     if (!category) {
//       return res.status(404).json({ message: "Category not found" });
//     }

//     res.status(200).json(category);
//   } catch (error) {
//     next(error);
//   }
// };
