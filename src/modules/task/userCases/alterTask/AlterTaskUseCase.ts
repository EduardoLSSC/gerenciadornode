import { Task } from "@prisma/client";
import { TaskDTO } from "../../dtos/TaskDTO";
import { GetOneTaskUseCase } from "../getOneTask/GetOneTaskUseCase"
import { prisma } from "../../../../prisma/client";

export class AlterTaskUseCase {
    async execute(alteredTaskId: number, { description, initialDate, finalDate }: TaskDTO): Promise<Task> {
        const updateTask = await prisma.task.update({
            where: {
                id: alteredTaskId
            },
            data: {
                description,
                initial_date: initialDate,
                final_date: finalDate
            }
        });

        return updateTask;
    }
}