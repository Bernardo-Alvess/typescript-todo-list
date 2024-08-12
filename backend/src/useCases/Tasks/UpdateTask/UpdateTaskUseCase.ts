import { SqlLiteTaskRepository } from "@repositories/implementations/SqlLiteTaskRepository";

export class UpdateTaskUseCase {
    constructor(private sqlLiteTaskRepository: SqlLiteTaskRepository) { }

    async execute(task: IUpdateTaskDTO) {
        const isValid = await this.sqlLiteTaskRepository.taskExists(task.id)

        if (!isValid) {
            throw new Error("Task does not exist")
        }

        await this.sqlLiteTaskRepository.updateTask(task)
        return task
    }
}