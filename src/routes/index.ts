import { Router } from "express";
import { router as taskRoutes } from "./TaskRoutes/taskRoutes"
import { router as userRoutes } from './UserRoutes/userRoutes'

const router = Router()

router.use('/tasks', taskRoutes)
router.use('/users', userRoutes)
export { router }
