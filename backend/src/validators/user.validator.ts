import { z } from "zod";

// UPDATE — хэрэглэгч өөрийн мэдээлэл засах
export const updateUserSchema = z.object({
  email: z.email().optional(),
  profileImage: z.url().optional(),
  address: z.string().min(1).optional(),
});
