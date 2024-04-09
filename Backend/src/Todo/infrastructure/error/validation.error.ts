import { Response } from "express";

export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500,
}

export class HttpResponse {
    ok(res: Response, data?: any):Response {
        return res.status(HttpStatusCode.OK).json({
            status: HttpStatusCode.OK,
            message: "Success",
            data: data
        })
    }
    created(res: Response, data?: any): Response {
        return res.status(HttpStatusCode.CREATED).json({
            status: HttpStatusCode.CREATED,
            message: "Success",
            data: data
        })
    }
    badRequest(res:Response, data?: any): Response {
        return res.status(HttpStatusCode.BAD_REQUEST).json({
            status: HttpStatusCode.BAD_REQUEST,
            message: "Bad Request",
            data: data
        })
    }
    notFound(res:Response, data?: any): Response {
        return res.status(HttpStatusCode.NOT_FOUND).json({
            status: HttpStatusCode.NOT_FOUND,
            message: "Not Found",
            data: data
        })
    }
    unAuthorized(res:Response, data?: any) {
        return res.status(HttpStatusCode.UNAUTHORIZED).json({
            status: HttpStatusCode.UNAUTHORIZED,
            message: "Unauthorized",
            data: data
        })
    }
    forbidden(res:Response, data?: any) {
        return res.status(HttpStatusCode.FORBIDDEN).json({
            status: HttpStatusCode.FORBIDDEN,
            message: "Forbidden",
            data: data
        })
    }
    internalServerError(res:Response, data?: any) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            status: HttpStatusCode.INTERNAL_SERVER_ERROR,
            message: "Internal Server Error",
            data: data
        })
    }
    
}