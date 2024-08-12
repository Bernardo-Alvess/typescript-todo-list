import { SqlLiteTaskRepository } from "@repositories/implementations/SqlLiteTaskRepository";
import { GetTasksUseCase } from "./GetTasksUseCase";
import { GetTasksController } from "./GetTasksController";

const sqlLiteTaskRepository = new SqlLiteTaskRepository()
const getTasksUseCase = new GetTasksUseCase(sqlLiteTaskRepository)
const getTasksController = new GetTasksController(getTasksUseCase)

export { getTasksController, getTasksUseCase }
