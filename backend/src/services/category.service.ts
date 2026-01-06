import { CategoryModel } from "../database/schema/category.schema.js";

export const createCategoryService = async (name: string) => {
  return await CategoryModel.create({ name });
};

export const getCategoryService = async (id: string) => {
  return await CategoryModel.findById(id);
};

export const getCategoriesService = async () => {
  return await CategoryModel.find({});
};

export const updateCategoryService = async (id: string, name: string) => {
  return await CategoryModel.findByIdAndUpdate(id, { name }, { new: true });
};

export const deleteCategoryService = async (id: string) => {
  return await CategoryModel.findByIdAndDelete(id);
};
// 💡 Одоо controller database мэдэхгүй
