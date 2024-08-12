import { z } from 'zod'
import { Request } from 'express'

class TaskIdSchema {
    validateSchema = (request: Request) => {
        const schema = z.object({
            id: z.string().uuid({ message: "Invalid UUID format" }).min(1)
        })

        schema.parse(request.body)
    }
}

export { TaskIdSchema }