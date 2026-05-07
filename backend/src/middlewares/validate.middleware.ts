import type { RequestHandler } from "express";
import type { ZodType } from "zod";

// Zod schema-аар req.body-г шалгаж, алдаатай бол error handler руу дамжуулна
export const validate =
  (schema: ZodType): RequestHandler =>
  (req, _res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) return next(result.error);
    req.body = result.data;
    next();
  };
