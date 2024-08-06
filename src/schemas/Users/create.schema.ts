import { z } from 'zod'
import { Request } from 'express'

class CreateUserSchema {
    validateSchema(request: Request) {
        const schema = z.object({
            name: z.string().min(3),
            email: z.string().email(),
            password: z.string().min(5, { message: "Password too short" })
        })

        schema.parse(request.body)
    }
}

export { CreateUserSchema }