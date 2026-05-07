import { z } from "zod";

// CREATE — frontend зөвхөн foodId, quantity илгээнэ; үнэ болон totalPrice-г backend тооцоолно
export const createOrderSchema = z.object({
  orderItems: z
    .array(
      z.object({
        foodId: z.string().min(1),
        quantity: z.number().int().positive(),
      })
    )
    .min(1),
  deliveryAddress: z.string().min(1, "Delivery address is required"),
});

// UPDATE — зөвхөн статус өөрчлөх боломжтой
export const updateOrderSchema = z.object({
  status: z.enum(["pending", "paid", "delivered", "cancelled"]),
});
