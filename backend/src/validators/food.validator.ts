import { z } from "zod";

// CREATE food
export const createFoodSchema = z.object({
  name: z.string().min(1),
  price: z.number().positive(),
  image: z.url(),
  ingredients: z.string().min(1),
  categoryIds: z.array(z.string()).min(1),
});

// UPDATE food — бүх талбар заавал биш
export const updateFoodSchema = z.object({
  name: z.string().min(1).optional(),
  price: z.number().positive().optional(),
  image: z.url().optional(),
  ingredients: z.string().min(1).optional(),
  categoryIds: z.array(z.string()).optional(),
});
