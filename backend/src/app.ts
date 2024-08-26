import express from 'express'
import { router } from './routes/index'
import { errorHandlerMiddleware } from './middleware/ErrorHandlerMiddleware'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(cookieParser())
app.use(express.json())
app.use(router)
app.use(errorHandlerMiddleware)


export { app }