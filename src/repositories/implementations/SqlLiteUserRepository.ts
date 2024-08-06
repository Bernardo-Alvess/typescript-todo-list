import { User } from "../../entities/UserEntity";
import { IUserRepository } from "../IUserRepositry";
import { prisma } from "./prismaClient";

export class SqlLiteUserRepository implements IUserRepository {
    async saveUser(user: User): Promise<void> {
        await prisma.users.create({ data: user })
    }

    async getUserById(id: string): Promise<User> {
        const user = await prisma.users.findUnique({
            where: { id }
        })

        if (!user) {
            throw new Error('User not found')
        }

        return user
    }

    async userAlreadyRegistered(email: string): Promise<boolean> {
        const user = prisma.users.findUnique({
            where: { email: email }
        })

        if (!user) return false

        return true
    }

}