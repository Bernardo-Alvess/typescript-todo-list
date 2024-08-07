import { Task } from "../entities/TaskEntity";

export interface ITasksRepository {
    createTask(task: Task): Promise<void>
    deleteTask(id: string): Promise<void>
    getTasksForUser(userId: string): Promise<Task[]>
    updateTask(task: IUpdateTaskDTO): Promise<void>
    taskExists(id: string): Promise<boolean>
}