import { Router } from 'express'
import { IdUserSchema } from 'src/schemas/Users/id.schema'
import { CreateUserSchema } from 'src/schemas/Users/create.schema'
import { createUserController } from 'src/useCases/Users/CreateUsers'
import { getUserController } from 'src/useCases/Users/GetUsers'

const router = Router()

router.get('/', (req, res) => {
    const idUserSchema = new IdUserSchema()
    idUserSchema.validateSchema(req)
    getUserController.handle(req, res)
})

router.post('/', (req, res) => {
    const createUserSchema = new CreateUserSchema()
    createUserSchema.validateSchema(req)
    createUserController.handle(req, res)
})

export { router }