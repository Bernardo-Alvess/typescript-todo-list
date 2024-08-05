import { Router } from 'express'
import { createUserController } from 'src/useCases/Users/CreateUsers'
import { getUserController } from 'src/useCases/Users/GetUsers'

const router = Router()

router.get('/', (req, res) => {
    getUserController.handle(req, res)
})

router.post('/', (req, res) => {
    createUserController.handle(req, res)
})

export { router }