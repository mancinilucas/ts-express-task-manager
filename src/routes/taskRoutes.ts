import { Router } from "express";

const router = Router();

router.get("/tasks", (req, res) =>{
    res.json({ tasks: [] });
});

router.post("/tasks", (req, res) => {
    const newTask = req.body;
    res.status(201).json({ task: newTask });
});

export default router;