import { Request, Response } from "express";
import { AlterTaskUseCase } from "./AlterTaskUseCase";
export class AlterTaskController {
    async handle(req: Request, res: Response) {
        const alterTaskUseCase = new AlterTaskUseCase()
        const alteredTaskId = req.params['id'];
        const newTaskBody = req.body;

        const response = await alterTaskUseCase.execute(parseInt(alteredTaskId), newTaskBody);
        
        return res.status(200).json(response);
    }
}