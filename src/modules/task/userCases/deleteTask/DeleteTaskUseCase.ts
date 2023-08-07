import { prisma } from "../../../../prisma/client";

export class DeleteTaskUseCase {
    async execute(taskId: number) {
        await prisma.task.delete({
            where: {
                id: taskId
            }
        });
        return "Task deleted successfully";
    }
}