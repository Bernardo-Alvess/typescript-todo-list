import { PostgressUserRepository } from "@repositories/implementations/PostgresUserRepository";
import { MailTrapMailProvider } from "src/providers/implementations/MailTrapMailProvider";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailTrapMailProvider = new MailTrapMailProvider()
const postgressUserRepository = new PostgressUserRepository()

const createUserUseCase = new CreateUserUseCase(postgressUserRepository, mailTrapMailProvider)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController, createUserUseCase }