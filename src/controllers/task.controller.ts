import type { Request, Response } from "express";
import { taskService } from "../modules/tasks/task.factory";

export class TaskController {
  static list(req: Request, res: Response) {
    const tasks = taskService.list();
    res.json(tasks);
  }

  static createTask(req: Request, res: Response) {
    const task = taskService.create(req.body);
    res.status(201).json(task);
  }

  static completeTask(req: Request<{ id?: string }>, res: Response) {
    const id = req.params.id as string;
    const task = taskService.complete(id);
    res.json(task);
  }
}
