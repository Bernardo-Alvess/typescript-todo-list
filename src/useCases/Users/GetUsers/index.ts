import { SqlLiteUserRepository } from "@repositories/implementations/SqlLiteUserRepository";
import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";

const sqlLiteUserRepository = new SqlLiteUserRepository()
const getUserUseCase = new GetUserUseCase(sqlLiteUserRepository)
const getUserController = new GetUserController(getUserUseCase)

export { getUserController, getUserUseCase }