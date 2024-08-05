import { SqlLiteTaskRepository } from "@repositories/implementations/SqlLiteTaskRepository";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";
import { DeleteTaskController } from "./DeleteTaskController";

const sqlLiteTaskRepository = new SqlLiteTaskRepository()
const deleteTaskUseCase = new DeleteTaskUseCase(sqlLiteTaskRepository)
const deleteTaskController = new DeleteTaskController(deleteTaskUseCase)

export { deleteTaskController, deleteTaskUseCase }