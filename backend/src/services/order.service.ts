import { OrderModel } from "../database/schema/order.schema.js";

export const createOrderService = async (data: any) => {
  return await OrderModel.create(data);
};

export const getOrderService = async (id: string) => {
  return await OrderModel.findById(id);
};

export const getOrdersService = async () => {
  return await OrderModel.find({});
};

export const updateOrderService = async (id: string, data: any) => {
  return await OrderModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteOrderService = async (id: string) => {
  return await OrderModel.findByIdAndDelete(id);
};

// 💡 Одоо controller database мэдэхгүй
