import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ZodError } from "zod";
import bcrypt from 'bcrypt'
import { createToken } from "@util/createToken";

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email } = request.body
        var { password } = request.body

        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt)

        try {
            const newUser = await this.createUserUseCase.execute({ name, email, password })

            const token = createToken(newUser.id)

            return response.status(201).json({ token })
        } catch (err) {
            if (err instanceof ZodError) {
                return response.status(400).json({
                    message: err.message
                })
            } 
            return response.status(400).json({
                message: "User already registered"
            })
        }
    }
}