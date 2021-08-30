import { Request, Response, NextFunction } from "express";
import { HttpException } from "../common/http-exeption";
export default function errorHandler(error: HttpException, req: Request, res: Response, next: NextFunction) {

  // const errorObj = {
  //   message: error.message || "Something went wrong.",
  // };
  // res.status(error.status || 500).send(errorObj);
  const errorObj: {
    message?: string,
    status_code?: number,
    name?:string,
  } = {};

  const status = error.status ||500;
  const message = error.message || "Something went wrong!";
  const status_code = error.statusCode || 100;
  errorObj.message = message;
  errorObj.status_code = status_code;

  res.status(status).send({ ...errorObj});  
}