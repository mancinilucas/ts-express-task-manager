import { InMemoryTaskRepository } from "./in-memory-tasks.repository";
import { TaskService } from "./task.service";

const taskRepository = new InMemoryTaskRepository();
export const taskService = new TaskService(taskRepository);
