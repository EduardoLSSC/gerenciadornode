import { prisma } from "../../../../prisma/client"
export class GetUserUseCase {
    async execute() {
        const users = await prisma.user.findMany({});
        return users;
    }
}