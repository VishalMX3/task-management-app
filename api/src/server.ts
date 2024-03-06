import express, { Request, Response } from "express"
import connectToDatabse from "./db"
import dotenv from "dotenv";

const application = express()

const PORT = 1337

dotenv.config();

connectToDatabse();

application.get("/ping", (request: Request, response: Response) => {
    response.send("Pong")
})

application.listen(PORT, () => {
    console.log("Server is up and running on 1337")
})