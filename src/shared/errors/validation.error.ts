import { DomainError } from "./domain.error";

export class ValidationError extends DomainError {
  readonly statusCode = 400;
  readonly code = "VALIDATION_ERROR";

  constructor(message: string) {
    super(message);
  }
}
