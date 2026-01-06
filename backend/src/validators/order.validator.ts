import { z } from "zod";

// CREATE order
export const createOrderSchema = z.object({
  userId: z.string(),
  foodIds: z.array(z.string()).min(1),
  totalPrice: z.number().positive(),
});

// UPDATE order (жишээ: status)
export const updateOrderSchema = z.object({
  status: z.enum(["pending", "paid", "delivered", "cancelled"]),
});
