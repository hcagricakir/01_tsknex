import express from 'express';
import { PaginationOptions } from '../interface/requestPagination.interface';

export default interface IRouterBase {
    router:express.Router;
    routes(): any;
}

export interface IRouter{
    router:express.Router;
    controller:any;
}

declare global {
    namespace Express{
        interface Request{
            paginationOptions: PaginationOptions;
        }
    }
}