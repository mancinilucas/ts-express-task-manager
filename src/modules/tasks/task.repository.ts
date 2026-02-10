import type { Task } from "./task.types";

// Repository interface for Task entity (domain layer)
export interface TaskRepository {
  findAll(): Task[];
  findById(id: string): Task | null;
  save(task: Task): void;
  update(task: Task): void;
}
