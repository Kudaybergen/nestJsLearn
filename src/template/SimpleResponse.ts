import { HttpStatus } from "@nestjs/common"

export class SimpleResponse{
    path: string
    statusCode: HttpStatus
    message: string
    data?: any | null | undefined
    
    constructor(path: string, statusCode: HttpStatus, message: string, data?: any) {
        this.path = path;
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}