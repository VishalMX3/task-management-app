import express from "express"
import {
 
    createTask,
  getAllTasks,
  toggleTaskStatus,
  getAllCompletedTasks,
  getTasksForToday,
 
} from "../controllers/task.controller"
import { authenticationMiddleware } from "../middleware"

const taskRoutes = express.Router()

taskRoutes.use(authenticationMiddleware)

taskRoutes.route("/").get(getAllTasks)
taskRoutes.route("/create").post(createTask)
taskRoutes.route("/update/:id").put(toggleTaskStatus)
taskRoutes.route("/completed").get(getAllCompletedTasks)
taskRoutes.route("/today").get(getTasksForToday)

export default taskRoutes