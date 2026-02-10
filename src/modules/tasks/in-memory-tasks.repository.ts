import type { TaskRepository } from "./task.repository";
import type { Task } from "./task.types";

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findById(id: string): Task | null {
    return this.tasks.find((task) => task.id === id) || null;
  }

  save(task: Task): void {
    this.tasks.push(task);
  }

  update(task: Task): void {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }
}
