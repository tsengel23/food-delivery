import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.js";
import { FoodModel } from "../../database/schema/food.schema.js";

type OrderItemInput = { foodId: string; quantity: number };

// Захиалга үүсгэнэ — хоолны үнийг DB-с татаж totalPrice-г backend тооцоолно
export const createOrder: RequestHandler = async (req, res, next) => {
  try {
    const { orderItems, deliveryAddress } = req.body as { orderItems: OrderItemInput[]; deliveryAddress: string };
    const userId = req.user?._id;

    // Хоолны үнийг DB-с татна
    const foodIds = orderItems.map((item) => item.foodId);
    const foods = await FoodModel.find({ _id: { $in: foodIds } });

    // Бүх foodId олдсон эсэхийг шалгана
    if (foods.length !== foodIds.length) {
      res.status(400).json({ success: false, message: "One or more foods not found" });
      return;
    }

    // OrderItems-д үнийг нэмж, totalPrice тооцоолно
    let totalPrice = 0;
    const itemsWithPrice = orderItems.map((item) => {
      const food = foods.find((f) => f._id.toString() === item.foodId);
      const price = food!.price;
      totalPrice += price * item.quantity;
      return { foodId: item.foodId, quantity: item.quantity, price };
    });

    const order = await OrderModel.create({ userId, orderItems: itemsWithPrice, totalPrice, deliveryAddress });
    const populated = await order.populate([{ path: "orderItems.foodId" }, { path: "userId", select: "-password" }]);

    res.status(201).json({ success: true, data: populated });
  } catch (err) {
    next(err);
  }
};
