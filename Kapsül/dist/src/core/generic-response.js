"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericResponse = void 0;
const success_message_1 = require("./success-message");
class GenericResponse {
    constructor() {
        this.success = true;
        this.Result = [];
        this.successMessage = null;
    }
    get successMessage() {
        return this._successMessage;
    }
    set successMessage(value) {
        if (this.Result != null && this.Result.length > 0)
            this._successMessage = null;
        else
            this._successMessage = new success_message_1.SuccessMessage();
    }
    get getData() {
        return this.data;
    }
    set setData(data) {
        this.data = data;
    }
    get getSuccess() {
        if (this.Result != null && this.Result.length > 0)
            this.success = false;
        else
            this.success = true;
        return this.success;
    }
    set setSuccess(success) {
        this.success = success;
    }
}
exports.GenericResponse = GenericResponse;
//# sourceMappingURL=generic-response.js.map