"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.UnsupportedMediaTypeError = exports.NotAcceptableError = exports.MethodNotAllowedError = exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.BadRequestError = exports.HttpError = void 0;
const error_message_1 = require("../../utilities/constants/error-message");
const http_statuscode_1 = require("../../utilities/enums/http-statuscode");
const base_error_1 = require("./base-error");
class HttpError extends base_error_1.BaseError {
    constructor(message) {
        super(message);
    }
}
exports.HttpError = HttpError;
class BadRequestError extends HttpError {
    constructor(message) {
        var _a;
        super((_a = error_message_1.BadRequestErrorMessages[message]) !== null && _a !== void 0 ? _a : error_message_1.BadRequestErrorMessages["BASIC_ERROR"]);
        Object.setPrototypeOf(this, BadRequestError.prototype);
        this.statusCode = http_statuscode_1.HttpStatusCode.BadRequest;
    }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError extends HttpError {
    constructor(message) {
        var _a;
        super((_a = error_message_1.UnauthorizedErrorMessages[message]) !== null && _a !== void 0 ? _a : error_message_1.UnauthorizedErrorMessages["BASIC_ERROR"]);
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
        this.statusCode = http_statuscode_1.HttpStatusCode.UnAuthorized;
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends HttpError {
    constructor(message) {
        var _a;
        super((_a = error_message_1.ForbiddenErrorMessages[message]) !== null && _a !== void 0 ? _a : error_message_1.ForbiddenErrorMessages["BASIC_ERROR"]);
        Object.setPrototypeOf(this, ForbiddenError.prototype);
        this.statusCode = http_statuscode_1.HttpStatusCode.Forbidden;
    }
}
exports.ForbiddenError = ForbiddenError;
class NotFoundError extends HttpError {
    constructor(message) {
        var _a;
        super((_a = error_message_1.NotFoundErrorMessages[message]) !== null && _a !== void 0 ? _a : error_message_1.NotAcceptableErrorMessages["BASIC_ERROR"]);
        Object.setPrototypeOf(this, NotFoundError.prototype);
        this.statusCode = http_statuscode_1.HttpStatusCode.NotFound;
    }
}
exports.NotFoundError = NotFoundError;
class MethodNotAllowedError extends HttpError {
    constructor(message) {
        var _a;
        super((_a = error_message_1.MethodNotAllowedMessages[message]) !== null && _a !== void 0 ? _a : error_message_1.MethodNotAllowedMessages["BASIC_ERROR"]);
        Object.setPrototypeOf(this, MethodNotAllowedError.prototype);
        this.statusCode = http_statuscode_1.HttpStatusCode.MethodNotAllowed;
    }
}
exports.MethodNotAllowedError = MethodNotAllowedError;
class NotAcceptableError extends HttpError {
    constructor(message) {
        var _a;
        super((_a = error_message_1.NotAcceptableErrorMessages[message]) !== null && _a !== void 0 ? _a : error_message_1.NotAcceptableErrorMessages["BASIC_ERROR"]);
        Object.setPrototypeOf(this, NotAcceptableError.prototype);
        this.statusCode = http_statuscode_1.HttpStatusCode.NotAcceptable;
    }
}
exports.NotAcceptableError = NotAcceptableError;
class UnsupportedMediaTypeError extends HttpError {
    constructor(message) {
        var _a;
        super((_a = error_message_1.UnsupportedMediaTypeErrorMessages[message]) !== null && _a !== void 0 ? _a : error_message_1.UnsupportedMediaTypeErrorMessages["BASIC_ERROR"]);
        Object.setPrototypeOf(this, UnsupportedMediaTypeError.prototype);
        this.statusCode = http_statuscode_1.HttpStatusCode.UnsupportedMediaType;
    }
}
exports.UnsupportedMediaTypeError = UnsupportedMediaTypeError;
class InternalServerError extends HttpError {
    constructor(message) {
        var _a;
        super((_a = error_message_1.InternalServerErrorMessages[message]) !== null && _a !== void 0 ? _a : error_message_1.InternalServerErrorMessages["BASIC_ERROR"]);
        Object.setPrototypeOf(this, InternalServerError.prototype);
        this.statusCode = http_statuscode_1.HttpStatusCode.InternalServer;
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=http-error.js.map