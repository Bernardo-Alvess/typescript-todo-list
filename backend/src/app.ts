import express from 'express'
import { router } from './routes/index'
import { errorHandlerMiddleware } from './middleware/ErrorHandlerMiddleware'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(router)
app.use(cookieParser())
app.use(errorHandlerMiddleware)

export { app }