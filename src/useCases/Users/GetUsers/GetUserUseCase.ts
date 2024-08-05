import { User } from "@entities/UserEntity";
import { SqlLiteUserRepository } from "@repositories/implementations/SqlLiteUserRepository";

export class GetUserUseCase {
    constructor(private sqlLiteUserRepository: SqlLiteUserRepository) { }

    async execute(id: string): Promise<User> {
        const userData = await this.sqlLiteUserRepository.getUserById(id)
        return userData
    }

}