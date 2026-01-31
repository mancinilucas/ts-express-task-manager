import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>{
    res.json({ tasks: [] });
});

router.post("/", (req, res) => {
    const newTask = req.body;
    res.status(201).json({ task: newTask });
});

export default router;