import { Request, Response, NextFunction } from 'express';

export default function logger(req: Request) {
  return console.log(`${req.method} - ${req.hostname}`);


};

