// express-serve-static-core-г augment хийж req.user ашиглах боломжтой болгоно
declare module "express-serve-static-core" {
  interface Request {
    user?: {
      _id: string;
      email: string;
      role: string;
    };
  }
}

export {};
