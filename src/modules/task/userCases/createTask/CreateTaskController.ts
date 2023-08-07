import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";
export class CreateTaskController {
    async handle(req: Request, res: Response) {
        const { description, initialDate, finalDate, userId } = req.body;

        const createTaskUseCase = new CreateTaskUseCase();

        const result = await createTaskUseCase.execute({description, initialDate, finalDate, userId});

        return res.status(201).json(result);
    }
}