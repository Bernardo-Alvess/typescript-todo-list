import { SqlLiteTaskRepository } from "@repositories/implementations/SqlLiteTaskRepository";

export class DeleteTaskUseCase {
    constructor(private sqlLiteTaskRepository: SqlLiteTaskRepository) { }

    async execute(id: string) {
        const isValid = await this.sqlLiteTaskRepository.taskExists(id)

        if (!isValid) {
            throw new Error("Task does not exist")
        }

        await this.sqlLiteTaskRepository.deleteTask(id)
    }
}
