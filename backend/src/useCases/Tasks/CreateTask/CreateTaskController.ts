import { CreateTaskUseCase } from "./CreateTaskUseCase";
import { Request, Response } from "express";
export class CreateTaskController {

    constructor(private createTaskUseCase: CreateTaskUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { title, content, userId } = request.body

        try {
            const task = await this.createTaskUseCase.execute({ content, userId })
            return response.status(201).json({
                task: task
            })

        } catch (err) {
            if (err instanceof Error) {
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
