import { Request, Response } from "express"
import { GetTaskByUserUseCase } from "./GetTaskByUserUseCase";
export class GetTaskByUserController {
    async handle(req: Request, res: Response) {
        const userId = req.params['id'];
        const getTaskByUserUseCase = new GetTaskByUserUseCase();
        const result = await getTaskByUserUseCase.execute(parseInt(userId));
        return res.status(200).json(result); 
    }
}