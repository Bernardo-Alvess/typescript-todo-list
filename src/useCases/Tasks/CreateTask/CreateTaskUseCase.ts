import { Task } from "../../../entities/TaskEntity";
import { ITasksRepository } from "../../../repositories/ITasksRepository";
import { ITaskDTO } from "./ITaskDTO";

export class CreateTaskUseCase {
    constructor(private tasksRepository: ITasksRepository) { }

    async execute(data: ITaskDTO) {
        const task = new Task(data)
        await this.tasksRepository.createTask(task)
    }
}