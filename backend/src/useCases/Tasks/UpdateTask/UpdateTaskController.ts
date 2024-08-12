import { Request, Response } from "express";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";
import { ZodError } from "zod";

export class UpdateTaskController {
    constructor(private updateTaskUseCase: UpdateTaskUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const { id, title, content, checked } = request.body
            const updatedTask = await this.updateTaskUseCase.execute({ id, title, content, checked })
            response.status(200).json({ ...updatedTask })
        } catch (err) {
            if (err instanceof ZodError) {
                response.status(400).json({
                    message: err.message || "Bad Request"
                })
            }

            response.status(404).json({
                message: "Bad Request"
            })
        }
    }
}