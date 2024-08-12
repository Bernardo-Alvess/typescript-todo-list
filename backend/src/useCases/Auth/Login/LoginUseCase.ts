import { SqlLiteUserRepository } from "@repositories/implementations/SqlLiteUserRepository";

export class LoginUseCase {
    constructor(private sqlLiteUserRepository: SqlLiteUserRepository) { }

    async execute(email: string) {
        const dbUser = await this.sqlLiteUserRepository.getInfoForLogin(email)
        return dbUser
    }
}