import { z } from 'zod'
import { Request } from 'express'

class IdUserSchema {
    validateSchema(request: Request) {
        const schema = z.object({
            id: z.string().uuid()
        })

        schema.parse(request.body)
    }
}

export { IdUserSchema }