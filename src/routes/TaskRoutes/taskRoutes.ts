import { Router } from "express";
import { createTaskController } from "../../useCases/Tasks/CreateTask";
import { getTasksController } from "src/useCases/Tasks/GetTasks";
import { deleteTaskController } from "src/useCases/Tasks/DeleteTask";
import { updateTaskController } from "src/useCases/Tasks/UpdateTask";
import { TaskIdSchema } from "src/schemas/Tasks/id.schema"
import { z } from "zod";
import { CreateTaskSchema } from "src/schemas/Tasks/create.schema";
import { UpdateTaskSchema } from "src/schemas/Tasks/update.schema";

const router = Router()

router.post('/', (req, res) => {
    const createTaskSchema = new CreateTaskSchema()
    createTaskSchema.validateSchema(req)
    return createTaskController.handle(req, res)
})

router.get('/', (req, res) => {
    const taskIdSchema = new TaskIdSchema()
    taskIdSchema.validateSchema(req)
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