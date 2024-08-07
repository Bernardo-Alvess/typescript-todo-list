import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
    constructor(private loginUseCase: LoginUseCase) { }

    async handle(request: Request, response: Response) {
        const { email, password } = request.body
        const dbUser = await this.loginUseCase.execute(email)

        if (email === dbUser.email && password === dbUser.password)
            return response.status(200).json({ logged: true })

        return response.status(400).json({ logged: false })
    }
}