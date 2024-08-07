import { SqlLiteUserRepository } from "@repositories/implementations/SqlLiteUserRepository";
import { LoginUseCase } from "./LoginUseCase";
import { LoginController } from "./LoginController";

const sqlLiteUserRepository = new SqlLiteUserRepository()
const loginUseCase = new LoginUseCase(sqlLiteUserRepository)
const loginController = new LoginController(loginUseCase)

export { loginController, loginUseCase }