"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}
exports.BaseError = BaseError;
//# sourceMappingURL=base-error.js.map