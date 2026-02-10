import { randomUUID } from "node:crypto";
import type { Task } from "./task.types";
import { NotFoundError, ValidationError } from "../../shared/errors";

export class TaskService {
  private static tasks: Task[] = [];

  static list(): Task[] {
    return this.tasks;
  }

  static create(input: { title: string; description?: string }): Task {
    if (!input.title) {
      throw new ValidationError("Title is required");
    }

    const task: Task = {
      id: randomUUID(),
      title: input.title,
      description: input.description,
      status: "pending",
      createdAt: new Date(),
    };

    this.tasks.push(task);
    return task;
  }

  static complete(taskId: string): Task {
    const task = this.tasks.find((t) => t.id === taskId);

    if (!task) {
      throw new NotFoundError(`Task with id ${taskId} not found`);
    }

    task.status = "done";
    return task;
  }
}
