"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonExpectArugumentException = exports.ZeroPointException = exports.NegatifeNumberException = exports.ProgrammaticError = void 0;
const base_error_1 = require("./base-error");
class ProgrammaticError extends base_error_1.BaseError {
    constructor(message) {
        super(message);
    }
}
exports.ProgrammaticError = ProgrammaticError;
class NegatifeNumberException extends ProgrammaticError {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, NegatifeNumberException.prototype);
        this.errorType = "number exception";
    }
}
exports.NegatifeNumberException = NegatifeNumberException;
class ZeroPointException extends ProgrammaticError {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, ZeroPointException.prototype);
        this.errorType = "number exception";
    }
}
exports.ZeroPointException = ZeroPointException;
class NonExpectArugumentException extends ProgrammaticError {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, NonExpectArugumentException.prototype);
        this.errorType = "Argument exception";
    }
}
exports.NonExpectArugumentException = NonExpectArugumentException;
//# sourceMappingURL=programmatic-error.js.map