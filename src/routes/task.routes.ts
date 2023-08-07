import { Router } from "express";
import { CreateTaskController } from "../modules/task/userCases/createTask/CreateTaskController";
import { GetTaskController } from "../modules/task/userCases/getTask/GetTaskController";
import { GetOneTaskUseController } from "../modules/task/userCases/getOneTask/GetOneTaskController";
import { AlterTaskController } from "../modules/task/userCases/alterTask/AlterTaskController";
import { DeleteTaskController } from "../modules/task/userCases/deleteTask/DeleteTaskController";
import { GetTaskByUserController } from "../modules/task/userCases/getTaskByUser/GetTaskByUserController";

const createTaskController = new CreateTaskController();
const getTaskController = new GetTaskController();
const getOneTaskController = new GetOneTaskUseController();
const alterTaskController = new AlterTaskController();
const deleteTaskController = new DeleteTaskController();
const getTaskByUserController = new GetTaskByUserController();

const taskRoutes = Router();

taskRoutes.post("/", createTaskController.handle);
taskRoutes.get("/", getTaskController.handle);
taskRoutes.get("/:id", getOneTaskController.handle);
taskRoutes.put("/:id", alterTaskController.handle);
taskRoutes.delete("/:id", deleteTaskController.handle);
taskRoutes.get("/get-by-user/:id", getTaskByUserController.handle);

export { taskRoutes };