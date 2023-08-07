import { Request, Response } from "express";
import { GetUserLoginUseCase } from "./GetUserLoginUseCase";
export class GetUserLoginController {
    async handle(req: Request, res: Response) {
        const {email, password} = req.body
        console.log(email, password)
        const getUserLoginUseCase = new GetUserLoginUseCase();
        const result = await getUserLoginUseCase.execute(email, password);

        return res.status(200).json(result);
    }
}