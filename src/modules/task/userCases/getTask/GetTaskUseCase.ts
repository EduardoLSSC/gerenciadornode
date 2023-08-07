import { prisma } from "../../../../prisma/client";

export class GetTaskUseCase {
    async execute() {
        const tasks = await prisma.task.findMany({});
        return tasks;
    }
}