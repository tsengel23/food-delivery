import { Router } from "express";
import { login } from "../controllers/auth/login.js";
import { register } from "../controllers/auth/register.js";
import { getMe } from "../controllers/auth/get-me.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const AuthRouter = Router();

AuthRouter.post("/register", register);
AuthRouter.post("/login", login);
AuthRouter.get("/me", authenticate, getMe); // токен шаардана

export { AuthRouter };
