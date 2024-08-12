import { Router } from 'express'
import { LoginSchema } from '@schemas/Auth/login.schema'
import { loginController } from '@useCases/Auth/Login/index'
const router = Router()

router.post('/login', (req, res) => {
    const loginSchema = new LoginSchema()
    loginSchema.validateSchema(req)
    return loginController.handle(req, res)
})

export { router }