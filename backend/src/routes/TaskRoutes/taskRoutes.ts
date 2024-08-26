import { Router } from "express";
import { createTaskController } from "@useCases/Tasks/CreateTask";
import { getTasksController } from "@useCases/Tasks/GetTasks";
import { deleteTaskController } from "@useCases/Tasks/DeleteTask";
import { updateTaskController } from "@useCases/Tasks/UpdateTask";
import { TaskIdSchema } from "@schemas/Tasks/id.schema"
import { CreateTaskSchema } from "@schemas/Tasks/create.schema";
import { UpdateTaskSchema } from "@schemas/Tasks/update.schema";

const router = Router()

router.post('/', (req, res) => {
    const createTaskSchema = new CreateTaskSchema()
    createTaskSchema.validateSchema(req)
    return createTaskController.handle(req, res)
})

router.get('/:id', (req, res) => {
    return getTasksController.handle(req, res)
})

router.delete('/', (req, res) => {
    const taskIdSchema = new TaskIdSchema()
    taskIdSchema.validateSchema(req)
    return deleteTaskController.handle(req, res)
})

router.put('/', (req, res) => {
    const updateTaskSchema = new UpdateTaskSchema()
    updateTaskSchema.validateSchema(req)
    return updateTaskController.handle(req, res)
})

export { router }