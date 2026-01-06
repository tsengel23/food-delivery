import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ errors: err.issues });
  }
  res.status(500).json({ message: "Server error" });
};

// // error-handler.ts
// import type { ErrorRequestHandler } from "express";
// import { ZodError } from "zod";

// export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
//   if (err instanceof ZodError) {
//     return res.status(400).json({ errors: err.issues , });
//   }
//   res.status(500).json({ message: "Server error" });
// };

// import type { ErrorRequestHandler } from "express";
// import { ZodError } from "zod";

// export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
//   if (err instanceof ZodError) {
//     return res.status(400).json({
//       message: "Validation error",
//       errors: err.issues,
//     });
//   }

//   console.error(err);

//   res.status(500).json({
//     message: "Internal server error",
//   });
// };
