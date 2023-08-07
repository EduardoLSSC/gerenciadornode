import { Task } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class CreateTaskUseCase {
    async execute({description, initialDate, finalDate, userId}): Promise<Task> {
        const task = await prisma.task.create({
            data: {
                description,
                final_date: finalDate,
                initial_date: initialDate,
                userId: userId
            }
        });

        return task;
    }
}