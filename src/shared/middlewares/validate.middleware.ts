import type { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";
import { ValidationError } from "../errors/validation.error";

type ValidationTarget = "body" | "params" | "query";

export function validate(schema: ZodType, target: ValidationTarget = "body") {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[target];
    const result = schema.safeParse(data);

    if (!result.success) {
      const message = result.error.issues
        .map((issue) => issue.message)
        .join(", ");

      throw new ValidationError(message);
    }

    req[target] = result.data;
    next();
  };
}
