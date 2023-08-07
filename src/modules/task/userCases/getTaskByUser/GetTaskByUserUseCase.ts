import { Task } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetTaskByUserUseCase {
    async execute(userId: number): Promise<Task[]> {
        console.log(userId)
        const tasks = await prisma.task.findMany({
            where: {
                userId: userId
            }
        });
        console.log(tasks)
        return tasks
    }
}