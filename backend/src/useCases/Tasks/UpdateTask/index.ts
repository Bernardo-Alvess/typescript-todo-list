import { UpdateTaskUseCase } from "./UpdateTaskUseCase";
import { SqlLiteTaskRepository } from "@repositories/implementations/SqlLiteTaskRepository";
import { UpdateTaskController } from "./UpdateTaskController";

const sqlLiteTaskRepository = new SqlLiteTaskRepository()
const updateTaskUseCase = new UpdateTaskUseCase(sqlLiteTaskRepository)
const updateTaskController = new UpdateTaskController(updateTaskUseCase)

export { updateTaskController, updateTaskUseCase }