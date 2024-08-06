import { Router } from "express";
import { createTaskController } from "../../useCases/Tasks/CreateTask";
import { getTasksController } from "src/useCases/Tasks/GetTasks";
import { deleteTaskController } from "src/useCases/Tasks/DeleteTask";
import { updateTaskController } from "src/useCases/Tasks/UpdateTask";

const router = Router()

router.post('/', (req, res) => {
    return createTaskController.handle(req, res)
})

router.get('/', (req, res) => {
    return getTasksController.handle(req, res)
})

router.delete('/', (req, res) => {
    return deleteTaskController.handle(req, res)
})

router.put('/', (req, res) => {
    return updateTaskController.handle(req, res)
})

export { router }