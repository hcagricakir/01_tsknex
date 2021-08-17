export class HttpException extends Error {
    status: number;
    message: string;
 

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
        

    }
}

export class UserNotFound extends HttpException {
    constructor(message?: string) {
        super(404, message || "Cannot find the user");
    }
}

export class DatabaseError extends HttpException {
    constructor(message?: string) {
        super(500, message || "Something went wrong");
    }
}

