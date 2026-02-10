import { Router } from "express";
import { TaskController } from "../../controllers/task.controller";
import { validate } from "../../shared/middlewares/validate.middleware";
import { createTaskSchema, taskIdParamSchema } from "./task.schemas";

const router = Router();

router.get("/", TaskController.list);

router.post("/", validate(createTaskSchema, "body"), TaskController.createTask);

router.patch(
  "/:id/complete",
  validate(taskIdParamSchema, "params"),
  TaskController.completeTask,
);

export default router;
