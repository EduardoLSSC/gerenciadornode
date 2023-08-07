import { Response, Request } from "express";
import { GetOneTaskUseCase } from "./GetOneTaskUseCase";
export class GetOneTaskUseController {
    async handle(req: Request, res: Response) {
        const taskId = req.params['id'];

        const getOneTaskUseCase = new GetOneTaskUseCase();

        const result = await getOneTaskUseCase.execute(parseInt(taskId));

        return res.status(200).json(result);
    }
}