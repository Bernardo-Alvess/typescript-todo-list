import { z } from 'zod'
import { Request } from 'express'

class UpdateTaskSchema {
    validateSchema = (request: Request) => {
        const schema = z.object({
            id: z.string().uuid().min(1),
            title: z.string().min(1),
            content: z.string().min(5),
            checked: z.boolean({
                required_error: "checked is required"
            }),
        })

        schema.parse(request.body)
    }
}

export { UpdateTaskSchema }