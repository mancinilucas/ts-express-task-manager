import express from "express";
import type { Express } from "express";
import routes from "./routes";
import { errorMiddleware } from "./shared/middlewares/error.middleware";

export function createApp(): Express {
  const app = express();

  app.use(express.json());
  app.use(routes);

  app.use(errorMiddleware);

  return app;
}
