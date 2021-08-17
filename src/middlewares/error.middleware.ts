import { Request, Response, NextFunction } from "express";
import { HttpException } from "../common/http-exeption";

export default function errorHandler(error: HttpException, req: Request, res: Response, next: NextFunction) {

  const errorObj = {
    message: error.message || "Something went wrong.",
  };
  res.status(error.status || 500).send(errorObj);
}