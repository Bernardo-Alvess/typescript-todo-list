import { Request, Response } from "express";
import { GetTasksUseCase } from "./GetTasksUseCase";

export class GetTasksController {
    constructor(private getTasksUseCase: GetTasksUseCase) { }

    async handle(request: Request, response: Response) {
        const userId = request.params.id

        try {
            const tasks = await this.getTasksUseCase.execute(userId)
            return response.status(200).json({ tasks })
        } catch (err) {
            if (err instanceof Error) {
                response.status(404).json({
                    message: err.message || "No tasks found for user."
                })
            }

            response.status(404).json({
                message: "No tasks found for user."
            })
        }
    }
}