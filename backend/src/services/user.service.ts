import { UserModel } from "../database/schema/user.schema.js";

export const createUserService = async (data: any) => {
  return await UserModel.create(data);
};

export const getUserService = async (id: string) => {
  return await UserModel.findById(id);
};

export const getUsersService = async () => {
  return await UserModel.find({});
};

export const updateUserService = async (id: string, data: any) => {
  return await UserModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUserService = async (id: string) => {
  return await UserModel.findByIdAndDelete(id);
};

// 💡 Одоо controller database мэдэхгүй
