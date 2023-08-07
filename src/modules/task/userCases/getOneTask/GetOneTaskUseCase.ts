import { Task } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetOneTaskUseCase {
    async execute(taskId: number): Promise<Task> {
        const task = await prisma.task.findFirst({
            where: {
                id: taskId
            }
        });
        if (!task) {
            throw new AppError("Task not found");
        }

        return task;
    }
}