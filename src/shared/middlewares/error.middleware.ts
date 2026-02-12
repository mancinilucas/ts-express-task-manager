import type { Request, Response, NextFunction } from "express";
import { DomainError } from "../errors/domain.error";
import { AppError } from "../errors/app.error";

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent) {
    return next(err);
  }

  // Erro de regra de negócio
  if (err instanceof DomainError) {
    return res.status(err.statusCode).json({
      error: {
        code: err.code,
        message: err.message,
      },
    });
  }

  // Erro de aplicação mais genérico
  if (err instanceof AppError) {
    return res.status(err.code).json({
      error: {
        code: err.code ?? "APPLICATION_ERROR",
        message: err.message,
      },
    });
  }

  console.error(err);

  return res.status(500).json({
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "An unexpected error occurred",
    },
  });
}
