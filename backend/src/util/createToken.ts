import jwt from "jsonwebtoken"
import 'dotenv/config'

const token = process.env.TOKEN_SECRET!

const createToken = (id: string) => {
    return jwt.sign({ id }, token, {
        expiresIn: 3 * 24 * 60 * 60
    })
}

export { createToken }