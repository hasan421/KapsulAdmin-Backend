"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["Ok"] = 200] = "Ok";
    HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    HttpStatusCode[HttpStatusCode["UnAuthorized"] = 401] = "UnAuthorized";
    HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
    HttpStatusCode[HttpStatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    HttpStatusCode[HttpStatusCode["InternalServer"] = 500] = "InternalServer";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
//# sourceMappingURL=http-statuscode.js.map