import { NextFunction,Response } from "express";
import RequestPagination, { PaginationOptions } from "../interface/requestPagination.interface";

async function paginationMiddleware(request: RequestPagination, res: Response, next: NextFunction) {
    const paginationOptions = new PaginationOptions();
    if (request.query.orderBy && request.query.sortBy) {
        // paginationOptions.enablReq = true;
        paginationOptions.orderBy = request.query.orderBy.toString();
        paginationOptions.orderSort = request.query.sortBy === "desc" ? "desc" : "asc";
    }
    else {
        paginationOptions.orderSort = "asc";
    }

    // if (req.query.limit != undefined || req.query.limit != "") {
    //     paginationOptions.enabled = true;
    //     paginationOptions.limit = Number(req.query.limit);
    // }
    // else {
    //     paginationOptions.limit = 10;
    // }

    // if (req.query.skip != undefined || req.query.skip != "") {
    //     paginationOptions.enabled = true;
    //     paginationOptions.skip = Number(req.query.skip);
    // }
    // else {
    //     paginationOptions.skip = 0;
    // }
    // if (req.query.match != undefined || req.query.match !=""){
    //     paginationOptions.enabled = true;

    // }

    try{
        request.paginationOptions = paginationOptions;
        next();
    }catch(err){
        next(err);
    }
}
export default paginationMiddleware;