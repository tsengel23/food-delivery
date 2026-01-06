import { FoodModel } from "../database/schema/food.schema.js";

export const createFoodService = async (data: any) => {
  return await FoodModel.create(data);
};
export const getFoodService = async (id: string) => {
  return await FoodModel.findById(id);
};

export const getFoodsService = async () => {
  return await FoodModel.find({});
};

export const updateFoodService = async (id: string, data: any) => {
  return await FoodModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteFoodService = async (id: string) => {
  return await FoodModel.findByIdAndDelete(id);
};

// 💡 Одоо controller database мэдэхгүй
