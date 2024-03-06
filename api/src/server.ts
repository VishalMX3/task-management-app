import express, { Request, Response } from "express"
import connectToDatabse from "./db"

const application = express()

const PORT = 1337

connectToDatabse();

application.get("/ping", (request: Request, response: Response) => {
    response.send("Pong")
})

application.listen(PORT, () => {
    console.log("Server is up and running on 1337")
})