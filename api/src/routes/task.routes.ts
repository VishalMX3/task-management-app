import express from "express"
import {
 
    createTask,
  getAllTasks,
  toggleTaskStatus,
  getAllCompletedTasks,
 
} from "../controllers/task.controller"
import { authenticationMiddleware } from "../middleware"

const taskRoutes = express.Router()

taskRoutes.use(authenticationMiddleware)

taskRoutes.route("/").get(getAllTasks)
taskRoutes.route("/create").post(createTask)
taskRoutes.route("/update/:id").put(toggleTaskStatus)
taskRoutes.route("/completed").get(getAllCompletedTasks)

export default taskRoutes