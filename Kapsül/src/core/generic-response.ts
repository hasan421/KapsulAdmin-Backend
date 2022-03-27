import { HttpError } from "./error/http-error";
import { SuccessMessage } from "./success-message";

export class GenericResponse<T> {
  constructor() {
    this.Result = [];
    this.successMessage = null;

  }
private success = true;
 private _successMessage: SuccessMessage;
  public get successMessage(): SuccessMessage {
   return this._successMessage
  }
  public set successMessage(value: SuccessMessage) {
    if(this.Result != null && this.Result.length > 0)this._successMessage = null 
    else this._successMessage = new SuccessMessage();
  }

  
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
