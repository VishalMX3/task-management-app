import express, { Request, Response } from "express"
import connectToDatabse from "./db"
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";
import taskRoutes from "./routes/task.routes";

const application = express()

application.use(express.json())

const PORT = 1337

dotenv.config();

connectToDatabse();

application.get("/ping", (request: Request, response: Response) => {
    response.send("Pong")
})

application.use("/users", userRoutes)
application.use("/tasks", taskRoutes)

application.listen(PORT, () => {
    console.log("Server is up and running on 1337")
})