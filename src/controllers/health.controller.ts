import type { Request, Response } from "express";

export class HealthController {
  static check(req: Request, res: Response) {
    res.status(200).json({ status: "OK" });
  }
}
