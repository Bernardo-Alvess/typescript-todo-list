import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const verifyToken = (request: Request, response: Response, next: NextFunction) => {
    const token = request.headers['authorization']?.split(' ')[1]

    if (!token) return response.status(403).json({ message: 'No token provided' })

    jwt.verify(token, process.env.TOKEN_SECRET!, (err, decoded) => {
        if (err) return response.status(500).json({ message: 'Failed to authenticate token' })
        next()
    })

}

export { verifyToken }