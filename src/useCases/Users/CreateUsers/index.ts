import { SqlLiteUserRepository } from "@repositories/implementations/SqlLiteUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const sqlLiteUserRepository = new SqlLiteUserRepository()
const createUserUseCase = new CreateUserUseCase(sqlLiteUserRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController, createUserUseCase }
