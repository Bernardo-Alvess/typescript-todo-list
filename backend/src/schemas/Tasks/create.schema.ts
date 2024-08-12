import { z } from 'zod'
import { Request } from 'express'

class CreateTaskSchema {
    validateSchema = (request: Request) => {
        const schema = z.object({
            content: z.string().min(4),
            userId: z.string().uuid().min(1)
        })

        schema.parse(request.body)
    }
}

export { CreateTaskSchema }