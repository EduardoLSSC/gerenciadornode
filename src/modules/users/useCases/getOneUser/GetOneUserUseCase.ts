import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetOneUserUseCase {
    async execute(userId: number): Promise<User> {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if (!user) {
            throw new AppError("User not found", 404);
        }

        return user;
    }
}