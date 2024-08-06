import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ZodError } from "zod";

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body
        try {
            await this.createUserUseCase.execute({ name, email, password })
            return response.status(201).send()
        } catch (err) {
            if (err instanceof ZodError) {
                return response.status(400).json({
                    message: err.message || "Unexpected Error"

                })
            }
            return response.status(400).json({
                message: "Unexpected error."

            })
        }
    }
}