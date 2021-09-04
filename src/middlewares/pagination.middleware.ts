import { NextFunction, Response } from "express";
import RequestPagination, { PaginationOptions } from "../interface/requestPagination.interface";

async function paginationMiddleware(request: RequestPagination, res: Response, next: NextFunction) {
    const paginationOptions = new PaginationOptions();
    if (request.query.orderBy) {
        paginationOptions.enabled = true;
        paginationOptions.orderBy = String(request.query.orderBy);
    }
    else {
        paginationOptions.orderBy = "id"
    }
    if (request.query.orderSort) {
        paginationOptions.enabled = true;
        paginationOptions.orderSort = String(request.query.orderSort)
    }
    else {
        paginationOptions.orderSort = "asc"
    }
    if (request.query.limit) {
        paginationOptions.enabled = true;
        paginationOptions.limit = Number(request.query.limit);
    }
    else {
        paginationOptions.limit = 15;
    }
    if (request.query.skip) {
        paginationOptions.enabled = true;
        paginationOptions.skip = Number(request.query.skip);
    }
    else {
        paginationOptions.skip = 0;
    }
    if (request.query.lokasyon) {
        paginationOptions.enabled = true;
        paginationOptions.lokasyon = String(request.query.lokasyon)
    }

    try {
        request.paginationOptions = paginationOptions;
        next();
    } catch (err) {
        next(err);
    }
}
export default paginationMiddleware;