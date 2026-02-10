import { DomainError } from "./domain.error";

export class NotFoundError extends DomainError {
  readonly statusCode = 404;
  readonly code = "NOT_FOUND";

  constructor(message = "Resource not found") {
    super(message);
  }
}
