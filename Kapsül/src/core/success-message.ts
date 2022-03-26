export class SuccessMessage {
    public succesMessage: string;
    public statusCode:number;
    constructor(successMessage?:string,statusCode?:number) {
        this.succesMessage = successMessage ?? 'İşlem Başarılı'
        this.statusCode = statusCode ?? 200
    }
}