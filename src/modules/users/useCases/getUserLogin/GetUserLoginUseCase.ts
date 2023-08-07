import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetUserLoginUseCase {
    async execute(email: string, password: string): Promise<User> {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
                password: password
            }
        });
        if (!user) {
            throw new AppError("User not found");
        }

        return user;
    }
}