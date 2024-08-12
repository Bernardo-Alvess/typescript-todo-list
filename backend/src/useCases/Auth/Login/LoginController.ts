import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";
import bcrypt from 'bcrypt'
import { ZodError } from "zod";
import { createToken } from "@util/createToken";

export class LoginController {
    constructor(private loginUseCase: LoginUseCase) { }

    async handle(request: Request, response: Response) {
        const { email, password } = request.body
        try {
            const dbUser = await this.loginUseCase.execute(email)
            const isPasswordValid = await bcrypt.compare(password, dbUser.password)

            if (email === dbUser.email && isPasswordValid) {
                const token = createToken(dbUser.id)
                return response.status(200).json({ token })
            }

            return response.status(400).json({ message: "Invalid credentials" })
        } catch (err) {
            if (err instanceof ZodError) {
                return response.status(400).json({
                    message: err.message
                })
            }
            return response.status(400).json({ message: "User not found." })
        }

    }
}