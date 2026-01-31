import type { Request, Response } from "express";

export class TaskController{
    static list(req: Request, res: Response) {
        res.status(200).json({ data: [], message: "Lista de tarefas" });
    }

    static createTask(req: Request, res: Response) {
        const newTask = req.body;
        res.status(201).json({ data: newTask, message: "Tarefa criada" });
    }
}