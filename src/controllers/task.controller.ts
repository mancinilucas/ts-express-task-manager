import type { Request, Response } from "express";
import { TaskService } from "../modules/tasks/task.service";

export class TaskController {
  static list(req: Request, res: Response) {
    const tasks = TaskService.list();
    res.json(tasks);
  }

  static createTask(req: Request, res: Response) {
    const task = TaskService.create(req.body);
    res.status(201).json(task);
  }

  static completeTask(req: Request<{ id?: string }>, res: Response) {
    const id = req.params.id as string;
    const task = TaskService.complete(id);
    res.json(task);
  }
}
