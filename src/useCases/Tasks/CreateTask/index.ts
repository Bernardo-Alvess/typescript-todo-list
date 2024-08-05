import { SqlLiteTaskRepository } from "../../../repositories/implementations/SqlLiteTaskRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

const sqlLiteTaskRepository = new SqlLiteTaskRepository()
const createTaskUseCase = new CreateTaskUseCase(sqlLiteTaskRepository)
const createTaskController = new CreateTaskController(createTaskUseCase)

export { createTaskUseCase, createTaskController }