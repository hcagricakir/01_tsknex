import { NextFunction, Request, Response } from "express";
import RequestPagination, { PaginationOptions } from "../interface/requestPagination.interface";

async function paginationMiddleware(req: RequestPagination, res: Response, next: NextFunction) {
    const paginationOptions = new PaginationOptions();

    if (req.query.orderBy) {
        paginationOptions.enabled = true;
        paginationOptions.orderBy = req.query.orderBy.toString();
        paginationOptions.orderSort = req.query.sortBy === "desc" ? "desc" : "asc";
    }
    else {
        paginationOptions.orderSort = "asc";
    }

    if (req.query.limit != undefined || req.query.limit != "") {
        paginationOptions.enabled = true;
        paginationOptions.limit = Number(req.query.limit);
    }
    else {
        paginationOptions.limit = 10;
    }

    if (req.query.skip != undefined || req.query.skip != "") {
        paginationOptions.enabled = true;
        paginationOptions.skip = Number(req.query.skip);
    }
    else {
        paginationOptions.skip = 0;
    }
    if (req.query.match != undefined || req.query.match !=""){
        paginationOptions.enabled = true;

    }

    try{
        req.paginationOptions = paginationOptions;
        next();
    }catch(err){
        next(err);
    }
}
export default paginationMiddleware;