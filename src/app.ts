import express from "express";
import type { Express } from "express";

export function createApp(): Express {
  const app = express();

  app.use(express.json());

  app.get("/", (_req, res) => {
    res.send("TypeScript With Express Server!");
  });

  app.get("/health", (_req, res) => {
    res.send("Health Check: OK");
  });

  return app;
}
