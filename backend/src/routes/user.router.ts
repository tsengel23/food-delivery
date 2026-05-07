import { Router } from "express";
import { getUsers } from "../controllers/user/get-users.js";
import { getUser } from "../controllers/user/get-user.js";
import { updateUser } from "../controllers/user/update-user.js";
import { deleteUser } from "../controllers/user/delete-user.js";
import { updateRole } from "../controllers/user/update-role.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { updateUserSchema } from "../validators/user.validator.js";

const UserRouter = Router();

UserRouter.use(authenticate);

UserRouter.get("/", authorize("owner", "manager"), getUsers);
UserRouter.get("/:id", getUser);
UserRouter.put("/:id/role", authorize("owner"), updateRole); // зөвхөн owner
UserRouter.put("/:id", validate(updateUserSchema), updateUser);
UserRouter.delete("/:id", authorize("owner"), deleteUser);

export { UserRouter };
