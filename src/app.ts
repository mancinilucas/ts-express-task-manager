import express from "express";
import type { Express } from "express";

export function createApp(): Express {
  // Create a new Express application instance
  const app = express();

  // Middleware to parse JSON requests
  app.use(express.json());

  app.get("/", (_req, res) => {
    res.send("TypeScript With Express Server!");
  });

  app.get("/health", (_req, res) => {
    res.send("Health Check: OK");
  });

  return app;
}
