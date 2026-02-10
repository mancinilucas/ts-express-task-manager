import { randomUUID } from "node:crypto";
import type { Task } from "./task.types";
import { NotFoundError } from "../../shared/errors/not-found.error";
import { ValidationError } from "../../shared/errors/validation.error";
import type { TaskRepository } from "./task.repository";

export class TaskService {
  constructor(private readonly repository: TaskRepository) {}

  list(): Task[] {
    return this.repository.findAll();
  }

  create(input: { title: string; description?: string }): Task {
    if (!input.title || input.title.trim() === "") {
      throw new ValidationError("Title is required");
    }

    const task: Task = {
      id: randomUUID(),
      title: input.title,
      description: input.description,
      status: "pending",
      createdAt: new Date(),
    };

    this.repository.save(task);
    return task;
  }

  complete(taskId: string): Task {
    const task = this.repository.findById(taskId);

    if (!task) {
      throw new NotFoundError(`Task with id ${taskId} not found`);
    }

    task.status = "done";
    this.repository.update(task);
    return task;
  }
}
