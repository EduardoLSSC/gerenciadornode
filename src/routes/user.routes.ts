import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetUserController } from "../modules/users/useCases/getUser/GetUserController";
import { GetOneUserController } from "../modules/users/useCases/getOneUser/GetOneUserController";
import { GetUserLoginController } from "../modules/users/useCases/getUserLogin/GetUserLoginController";

const createUserController = new CreateUserController();
const getUserController = new GetUserController();
const getOneUserController = new GetOneUserController();
const getUserLoginController = new GetUserLoginController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getUserController.handle);
userRoutes.get("/:id", getOneUserController.handle);
userRoutes.post("/login", getUserLoginController.handle);

export { userRoutes };