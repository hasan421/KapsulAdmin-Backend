"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericResponse = void 0;
class GenericResponse {
    constructor() {
        this.success = true;
        this.Result = [];
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