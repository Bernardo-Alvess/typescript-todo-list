import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";
import { User } from "@entities/UserEntity";
import { ZodError } from "zod";

export class GetUserController {
    constructor(private getUserUseCase: GetUserUseCase) { }

    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request.body

        try {
            const userData = await this.getUserUseCase.execute(id)
            const user = new User({
                id: userData.id,
                name: userData.name,
                email: userData.email,
                password: userData.password
            })

            return response.status(200).send(user)
        } catch (err) {
            if (err instanceof ZodError) {
                return response.status(404).json({ message: err.message })
            }

            return response.status(404).json({ message: "User not found." })
        }
    }
}