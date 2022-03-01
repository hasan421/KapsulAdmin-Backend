import { BadRequestErrorMessages, ForbiddenErrorMessages, InternalServerErrorMessages, MethodNotAllowedMessages, NotAcceptableErrorMessages, NotFoundErrorMessages, UnauthorizedErrorMessages, UnsupportedMediaTypeErrorMessages } from "src/utilities/constants/error-message";
import { HttpStatusCode } from "src/utilities/enums/http-statuscode";
import { BaseError } from "./base-error";
export declare abstract class HttpError extends BaseError {
    statusCode: HttpStatusCode;
    message: string;
    constructor(message: string);
}
export declare class BadRequestError extends HttpError {
    constructor(message?: keyof typeof BadRequestErrorMessages);
}
export declare class UnauthorizedError extends HttpError {
    constructor(message?: keyof typeof UnauthorizedErrorMessages);
}
export declare class ForbiddenError extends HttpError {
    constructor(message?: keyof typeof ForbiddenErrorMessages);
}
export declare class NotFoundError extends HttpError {
    constructor(message?: keyof typeof NotFoundErrorMessages);
}
export declare class MethodNotAllowedError extends HttpError {
    constructor(message?: keyof typeof MethodNotAllowedMessages);
}
export declare class NotAcceptableError extends HttpError {
    constructor(message?: keyof typeof NotAcceptableErrorMessages);
}
export declare class UnsupportedMediaTypeError extends HttpError {
    constructor(message?: keyof typeof UnsupportedMediaTypeErrorMessages);
}
export declare class InternalServerError extends HttpError {
    constructor(message?: keyof typeof InternalServerErrorMessages);
}
