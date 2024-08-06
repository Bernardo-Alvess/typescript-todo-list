import { SqlLiteTaskRepository } from "@repositories/implementations/SqlLiteTaskRepository";

export class UpdateTaskUseCase {
    constructor(private sqlLiteTaskRepository: SqlLiteTaskRepository) { }

    async execute(task: IUpdateTaskDTO) {
        await this.sqlLiteTaskRepository.updateTask(task)
        return task
    }
}