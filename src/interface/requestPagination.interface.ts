import { Request } from 'express';

export class PaginationOptions {
    match!: {};
    skip!: number;
    limit!: number;
    orderBy!: string;
    orderSort!: string;
    enabled: boolean;

    constructor() {
        this.enabled = false;
    }
}
interface RequestPagination extends Request {
    paginationOptions: PaginationOptions;
}

export default RequestPagination;