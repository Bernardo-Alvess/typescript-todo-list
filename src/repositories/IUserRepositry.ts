import { User } from "../entities/UserEntity"

export interface IUserRepository {
    saveUser(user: User): Promise<void>
    getUserById(id: string): Promise<User>
}