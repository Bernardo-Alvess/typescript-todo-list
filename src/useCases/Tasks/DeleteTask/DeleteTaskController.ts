import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

export class DeleteTaskController {
    constructor(private deleteTaskUseCase: DeleteTaskUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const { id } = request.body
            await this.deleteTaskUseCase.execute(id)
            response.status(200).send()
        } catch (err) {
            if (err instanceof Error) {
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