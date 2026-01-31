import { Router } from "express";
import healthRoutes from "./healthRoutes";
import taskRoutes from "./taskRoutes";

const router = Router();

router.use("/health", healthRoutes);
router.use("/tasks", taskRoutes);

export default router;