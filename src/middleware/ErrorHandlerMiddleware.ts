import { ZodError } from 'zod'
import { Request, Response, NextFunction } from 'express'

const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ZodError) {
        return res.status(400).json({
            message: 'Invalid request data.',
            errors: err.errors.map(error => ({
                path: error.path,
                message: error.message
            }))
        })
    }

    return res.status(500).json({ message: 'Internal Server Error' })
}

export { errorHandlerMiddleware };