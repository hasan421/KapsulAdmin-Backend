"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericResponse = void 0;
class GenericResponse {
    constructor() {
        this.Result = [];
    }
    get getData() {
        return this._data;
    }
    set setData(data) {
        this._data = data;
    }
    get getSuccess() {
        if (this.Result != null && this.Result.length > 0)
            this._success = false;
        else
            this._success = true;
        return this._success;
    }
    set setSuccess(success) {
        this._success = success;
    }
}
exports.GenericResponse = GenericResponse;
//# sourceMappingURL=generic-response.js.map