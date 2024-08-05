import { SqlLiteUserRepository } from "@repositories/implementations/SqlLiteUserRepository";
import { User } from "@entities/UserEntity"
import { IUserDTO } from "./IUserDTO";

export class CreateUserUseCase {
    constructor(private sqlLiteUserRepository: SqlLiteUserRepository) { }

    async execute(data: IUserDTO) {
        const user = new User(data)
        await this.sqlLiteUserRepository.saveUser(user)
    }
}