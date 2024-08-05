import { SqlLiteTaskRepository } from "@repositories/implementations/SqlLiteTaskRepository";

export class GetTasksUseCase {
    constructor(private sqlLiteTaskRepository: SqlLiteTaskRepository) { }

    async execute(id: string) {
        return await this.sqlLiteTaskRepository.getTasksForUser(id)
    }
}