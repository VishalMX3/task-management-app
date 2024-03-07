import { Request, Response } from "express"
import { AuthRequest } from "../middleware"
import Task from "../models/task-model"
import { ITask } from "../types"

export const getAllTasks = async (request: AuthRequest, response: Response) => {
    try {
      const userId = request.user
      const tasks = await Task.find({
        user: userId,
      })
      response.send(tasks)
    } catch (error) {
      console.log("error in getAllTasks", error)
      response.send({ error: "Error while fetching tasks" })
      throw error
    }
  }

export const createTask = async (request: AuthRequest, response: Response) => {
    try {
      const userId = request.user
      const { name, date }: ITask = request.body
  
      const task = await Task.create({
        name,
        date,
        user: userId,
      })
      response.send(task)
    } catch (error) {
      console.log("error in createTask", error)
      response.send({ error: "Error while creating task" })
      throw error
    }
  }