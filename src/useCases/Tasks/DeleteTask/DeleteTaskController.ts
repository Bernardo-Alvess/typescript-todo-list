import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";
import { ZodError } from "zod";

export class DeleteTaskController {
    constructor(private deleteTaskUseCase: DeleteTaskUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const { id } = request.body
            await this.deleteTaskUseCase.execute(id)
            response.status(200).json({
                message: 'Task deleted successfuly'
            })
        } catch (err) {
            if (err instanceof ZodError) {
                response.status(404).send({
                    msg: err.message
                })
            }

            response.status(404).send({
                msg: "No task found"
            })
        }
    }
}