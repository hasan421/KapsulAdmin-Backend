import { HttpError } from "./error/http-error";

export class GenericResponse<T> {
  constructor() {
    this.Result = [];
  }

  private success = true;
  public Result: Array<HttpError>;
  private data: T;

  public get getData() {
    return this.data;
  }

  public set setData(data: T) {
    this.data = data;
  }
  public get getSuccess() {
    if (this.Result != null && this.Result.length > 0) this.success = false;
    else this.success = true;
    return this.success;
  }

  public set setSuccess(success: boolean) {
    this.success = success;
  }
}
