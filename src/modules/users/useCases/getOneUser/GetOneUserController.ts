import { Request, Response } from "express"
import {GetOneUserUseCase} from "./GetOneUserUseCase"
export class GetOneUserController {
    async handle(req: Request, res: Response){
        const userId = req.params['id'];
        const getOneUserUseCase = new GetOneUserUseCase();

        const result = await getOneUserUseCase.execute(parseInt(userId));

        return res.status(200).json(result);
    }
}