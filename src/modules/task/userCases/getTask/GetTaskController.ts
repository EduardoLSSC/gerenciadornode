import { Response, Request } from "express";
import { GetTaskUseCase } from "./GetTaskUseCase";

export class GetTaskController {
    async handle(req: Request ,res: Response) {
        const getTaskUseCase = new GetTaskUseCase();

        const result = await getTaskUseCase.execute();

        return res.status(200).json(result);
    }
}