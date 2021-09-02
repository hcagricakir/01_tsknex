export class Response {
    message: string;
    data?: any;
    status: number;
    statusCode?: number;
    constructor(status: number, message: string, data?: any, statusCode?: number) {
        this.message = message
        this.data = data;
        this.status = status;
        this.statusCode = statusCode
    }
}

export class OperationSuccesfull extends Response {
    constructor(public data?: any) {
        super(200, "Operation Succesfull", data, 1);
    }
}

export class InsertSuccesfull extends Response {
    constructor(public data?: any) {
        super(200, "Insert Succesfull", data, 2);
    }
}

export class DeleteSuccesfull extends Response {
    constructor(public data?: any) {
        super(200, "Delete Succesfull", data, 3);
    }
}