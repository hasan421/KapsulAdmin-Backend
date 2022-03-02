"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegatifeNumberException = exports.ProgrammingError = void 0;
const base_error_1 = require("./base-error");
class ProgrammingError extends base_error_1.BaseError {
    constructor(message) {
        super(message);
    }
}
exports.ProgrammingError = ProgrammingError;
class NegatifeNumberException extends ProgrammingError {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, NegatifeNumberException.prototype);
        this.errorType = "numberic exception";
    }
}
exports.NegatifeNumberException = NegatifeNumberException;
//# sourceMappingURL=programming-error.js.map