import express from "express"
import {
 
    createTask,
  getAllTasks,
 
} from "../controllers/task.controller"
import { authenticationMiddleware } from "../middleware"

const taskRoutes = express.Router()

taskRoutes.use(authenticationMiddleware)

taskRoutes.route("/").get(getAllTasks)
taskRoutes.route("/create").post(createTask)

export default taskRoutes