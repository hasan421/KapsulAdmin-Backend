"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessMessage = void 0;
class SuccessMessage {
    constructor(successMessage, statusCode) {
        this.succesMessage = successMessage !== null && successMessage !== void 0 ? successMessage : 'İşlem Başarılı';
        this.statusCode = statusCode !== null && statusCode !== void 0 ? statusCode : 200;
    }
}
exports.SuccessMessage = SuccessMessage;
//# sourceMappingURL=success-message.js.map