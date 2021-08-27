import { NextFunction,Response } from "express";
import RequestPagination, { PaginationOptions } from "../interface/requestPagination.interface";

async function paginationMiddleware(request: RequestPagination, res: Response, next: NextFunction) {
    const paginationOptions = new PaginationOptions();
    if (request.query.orderBy && request.query.sortBy) {
         paginationOptions.enabled = true;
        paginationOptions.orderBy = request.query.orderBy.toString();
        paginationOptions.orderSort = request.query.sortBy === "desc" ? "desc" : "asc";
    }
    else {
        paginationOptions.orderSort = "asc";
    }

     if (request.query.limit != undefined || request.query.limit != "") {
         paginationOptions.enabled = true;
         paginationOptions.limit = Number(request.query.limit);
     }
     else {
         paginationOptions.limit = 10;
     }

     if (request.query.skip != undefined || request.query.skip != "") {
         paginationOptions.enabled = true;
         paginationOptions.skip = Number(request.query.skip);
     }
     else {
         paginationOptions.skip = 0;
     }
     if (request.query.match != undefined || request.query.match !=""){
         paginationOptions.enabled = true;

     }

    try{
        request.paginationOptions = paginationOptions;
        next();
    }catch(err){
        next(err);
    }
}
export default paginationMiddleware;