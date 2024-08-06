import { z } from 'zod'
import { Request } from 'express'

class CreateTaskSchema {
    validateSchema = (request: Request) => {
        const schema = z.object({
            title: z.string().min(1),
            content: z.string().min(4),
            userId: z.string().uuid().min(1)
        })

        schema.parse(request.body)
    }
}

export { CreateTaskSchema }