import { Router } from "express";
import { router as taskRoutes } from "./TaskRoutes/taskRoutes"
import { router as userRoutes } from './UserRoutes/userRoutes'
import { router as authRoutes } from "./AuthRoutes/authRoutes"
import swaggerUi from "swagger-ui-express"
import swaggerDocs from '../swagger.json'
import { verifyToken } from '@util/verifyToken'

const router = Router()

router.use('/api/tasks', verifyToken, taskRoutes)
router.use('/api/users', userRoutes)
router.use('/api/auth', authRoutes)
router.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
export { router }
