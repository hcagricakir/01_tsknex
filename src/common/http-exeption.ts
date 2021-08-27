export class HttpException extends Error {
    status: number;
    message: string;
    statusCode:number

    constructor(status: number, message: string,statusCode:number) {
        super(message);
        this.status = status;
        this.message = message;
        this.statusCode = statusCode
    }
}

export class UserNotFound extends HttpException {
    constructor(message?: string) {
        super(404, message || "Cannot find the user",2);
    }
}

export class DatabaseError extends HttpException {
    constructor(message?: string) {
        super(500, message || "Something went wrong",3);
    }
}

export class ValidationError extends HttpException {
    constructor(message?: string) {
        super(400, message || "Validation error",4);
    }
}
