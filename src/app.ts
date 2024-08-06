import express from 'express'
import { router } from './routes/index'
import { errorHandlerMiddleware } from './middleware/ErrorHandlerMiddleware'

const app = express()

app.use(express.json())
app.use(router)
app.use(errorHandlerMiddleware)

export { app }