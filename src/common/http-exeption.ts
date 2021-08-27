export class HttpException extends Error{
    message: string;
    status: number;
    statusCode: number
    constructor(status: number, message: string, statusCode: number) {
        super(message)
        this.message = message;
        this.status = status;
        this.statusCode = statusCode
    }
}

export class UserNotFound extends HttpException {
    constructor() {
        super(404,"User not found", 4);
    }
}

export class DatabaseError extends HttpException {
    constructor(message: string) {
        super(500, message || "Something went wrong", 5);
    }
}

export class ValidationError extends HttpException {
    constructor(message: string) {
        super(400, message || "Validation error", 6);
    }
}
