import { SqlLiteTaskRepository } from "@repositories/implementations/SqlLiteTaskRepository";

export class DeleteTaskUseCase {
    constructor(private sqlLiteTaskRepository: SqlLiteTaskRepository) { }

    async execute(id: string) {
        await this.sqlLiteTaskRepository.deleteTask(id)
    }
}
