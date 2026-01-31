import express from "express";
import type { Express } from "express";
import routes from "./routes";

export function createApp(): Express {
  // Create a new Express application instance
  const app = express();

  // Middleware to parse JSON requests
  app.use(express.json());

  app.use(routes);

  return app;
}
