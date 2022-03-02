"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorMessages = exports.UnsupportedMediaTypeErrorMessages = exports.NotFoundErrorMessages = exports.MethodNotAllowedMessages = exports.NotAcceptableErrorMessages = exports.ForbiddenErrorMessages = exports.UnauthorizedErrorMessages = exports.BadRequestErrorMessages = void 0;
const BadRequestErrorMessages = {
    BASIC_ERROR: _createBasicError("Bad Request"),
    NonFieldMail: "Mail boş olamaz",
};
exports.BadRequestErrorMessages = BadRequestErrorMessages;
const UnauthorizedErrorMessages = {
    BASIC_ERROR: _createBasicError("Unauthorized"),
};
exports.UnauthorizedErrorMessages = UnauthorizedErrorMessages;
const ForbiddenErrorMessages = {
    BASIC_ERROR: _createBasicError("Forbidden"),
};
exports.ForbiddenErrorMessages = ForbiddenErrorMessages;
const NotFoundErrorMessages = {
    BASIC_ERROR: _createBasicError("Not Found"),
};
exports.NotFoundErrorMessages = NotFoundErrorMessages;
const MethodNotAllowedMessages = {
    BASIC_ERROR: _createBasicError("Method Not Allowed"),
};
exports.MethodNotAllowedMessages = MethodNotAllowedMessages;
const NotAcceptableErrorMessages = {
    BASIC_ERROR: _createBasicError("Not Acceptable"),
};
exports.NotAcceptableErrorMessages = NotAcceptableErrorMessages;
const UnsupportedMediaTypeErrorMessages = {
    BASIC_ERROR: _createBasicError("Unsupported Media Type"),
};
exports.UnsupportedMediaTypeErrorMessages = UnsupportedMediaTypeErrorMessages;
const InternalServerErrorMessages = {
    BASIC_ERROR: _createBasicError("Internal Server"),
};
exports.InternalServerErrorMessages = InternalServerErrorMessages;
function _createBasicError(message) {
    return ` ${message} Error`;
}
//# sourceMappingURL=error-message.js.map