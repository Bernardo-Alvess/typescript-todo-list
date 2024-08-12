import { z } from 'zod'
import { Request } from 'express'

class LoginSchema {
    validateSchema(request: Request) {
        const schema = z.object({
            email: z.string().email(),
            password: z.string().min(5, { message: "Password too short" })
        })

        schema.parse(request.body)
    }
}

export { LoginSchema }