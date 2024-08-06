import { Router } from "express";
import { router as taskRoutes } from "./TaskRoutes/taskRoutes"
import { router as userRoutes } from './UserRoutes/userRoutes'
import swaggerUi from "swagger-ui-express"
import swaggerDocs from '../swagger.json'

const router = Router()

router.use('/tasks', taskRoutes)
router.use('/users', userRoutes)
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
export { router }
