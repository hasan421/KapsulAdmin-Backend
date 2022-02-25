"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericResponse = void 0;
class GenericResponse {
    constructor() {
        this.Result = [];
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
    get success() {
        if (this.Result != null && this.Result.length > 0)
            this._success = false;
        else
            this._success = true;
        return this._success;
    }
    set success(success) {
        this._success = success;
    }
}
exports.GenericResponse = GenericResponse;
//# sourceMappingURL=generic-response.js.map