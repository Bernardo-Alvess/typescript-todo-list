import { prisma } from "./prismaClient";
import { Task } from "../../entities/TaskEntity";
import { ITasksRepository } from "../ITasksRepository";

export class SqlLiteTaskRepository implements ITasksRepository {

    async createTask(task: Task): Promise<void> {
        await prisma.tasks.create({ data: task })
    }

    async taskExists(id: string): Promise<boolean> {
        const task = await prisma.tasks.findUnique({
            where: { id: id }
        })

        if (!task) return false

        return true
    }

    async deleteTask(id: string): Promise<void> {
        await prisma.tasks.delete({
            where: { id: id }
        })
    }

    async getTasksForUser(userId: string): Promise<Task[]> {
        const tasks = await prisma.tasks.findMany({
            where: {
                userId: userId
            }
        })
        return tasks
    }

    async updateTask(task: IUpdateTaskDTO): Promise<void> {
        await prisma.tasks.update({
            data: {
                title: task.title,
                content: task.content,
                checked: task.checked,
            },
            where: { id: task.id }
        })
    }

}