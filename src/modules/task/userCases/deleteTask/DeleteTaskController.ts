import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";
export class DeleteTaskController {
    async handle(req: Request, res: Response) {
        const deleteTaskUseCase = new DeleteTaskUseCase();
        const deletedTaskId = req.params['id'];
        const result = await deleteTaskUseCase.execute(parseInt(deletedTaskId));
        return res.status(200).json(result);
    }
}