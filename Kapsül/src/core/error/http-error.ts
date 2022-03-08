import {
  BadRequestErrorMessages,
  ForbiddenErrorMessages,
  InternalServerErrorMessages,
  MethodNotAllowedMessages,
  NotAcceptableErrorMessages,
  NotFoundErrorMessages,
  UnauthorizedErrorMessages,
  UnsupportedMediaTypeErrorMessages,
} from "src/utilities/constants/error-message";
import { HttpStatusCode } from "src/utilities/enums/http-statuscode";
import { BaseError } from "./base-error";

/**
 *HTTP top-level hata sınıfı,hata mesajının ve başarı mesajının görüntülenmesi açısından,
 * bir uygulamayı kullanan izleyiciler için daha iyi bir kullanıcı deneyimi sağlamaya yardımcı olabilir.
 */
export class HttpError extends BaseError {
  public statusCode: HttpStatusCode | 500;
  public message: string;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.statusCode = statusCode ?? 500;
    this.message = message;
    Object.setPrototypeOf(this, HttpError.prototype);

  }
  
}

/**
 *Bu, alınan isteğin yanlış söz diziminden kaynaklanabilecek bir hata nedeniyle sunucu
 *tarafından işlenemediğini gösterir. Sunucu,
 *bir sonraki talep alındığında bazı değişikliklerin yapılmasını bekler,
 *aksi takdirde aynı hata devam eder.
 */

export class BadRequestError extends HttpError {
  constructor(message?: keyof typeof BadRequestErrorMessages) {
    super(
      BadRequestErrorMessages[message] ?? BadRequestErrorMessages["BASIC_ERROR"]
    );
    Object.setPrototypeOf(this, BadRequestError.prototype);
    this.statusCode = HttpStatusCode.BadRequest;
  }
}

/**
 *Bu durumda, alınan bir yanıta erişim sağlamak için yetkilendirme gerekir. Bu HTTP durum kodu HTTP 403'e benzer. Ancak burada,
 *talebin kabul edilebilmesi için geçerli kimlik bilgilerine sahip olması beklenir.
 */
export class UnauthorizedError extends HttpError {
  constructor(message?: keyof typeof UnauthorizedErrorMessages) {
    super(
      UnauthorizedErrorMessages[message] ??
        UnauthorizedErrorMessages["BASIC_ERROR"]
    );
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
    this.statusCode = HttpStatusCode.UnAuthorized;
  }
}

/**
 *Bu HTTP hata sınıfı, kullanıcı-istemcinin geçerli bir veriye sahip olduğu ancak sunucu tarafından erişimin reddedildiği anlamına gelir.
 *Kullanıcının söz konusu kaynak üzerinde herhangi bir hakka sahip olmasına izin verilmediğinden,
 *tekrarlanan girişimlerde bulunmak kullanıcı olarak başarılı bir yanıt vermeyecektir.
 */
export class ForbiddenError extends HttpError {
  constructor(message?: keyof typeof ForbiddenErrorMessages) {
    super(
      ForbiddenErrorMessages[message] ?? ForbiddenErrorMessages["BASIC_ERROR"]
    );
    Object.setPrototypeOf(this, ForbiddenError.prototype);
    this.statusCode = HttpStatusCode.Forbidden;
  }
}

/**
 *Bu HTTP hata sınıfı, istenen kaynağın sunucu tarafından bulunamayacağı anlamına gelir.
 * Bu, geçici bir aksaklıktan kaynaklanıyor olabilir ve gelecekte başka bir istekte bulunulursa kaynak kullanılabilir olabilir.
 *Çoğunlukla, 404'e götüren bağlantılara genellikle bozuk bağlantılar denir.
 */
export class NotFoundError extends HttpError {
  constructor(message?: keyof typeof NotFoundErrorMessages) {
    super(
      NotFoundErrorMessages[message] ??
        NotAcceptableErrorMessages["BASIC_ERROR"]
    );
    Object.setPrototypeOf(this, NotFoundError.prototype);
    this.statusCode = HttpStatusCode.NotFound;
  }
}

/**
 *Bu HTTP hata sınıfı, istenen bir yöntemin, sunucu tarafından tanındığında bile istenen kaynak için desteklenmediği anlamına gelir.
 *,Kaynak bir GET veya POST yöntemi bekliyor olabilir, ancak bir DELETE veya PUT yöntemi alırsa, yapılan istek 405 olarak reddedilecektir.
 */
export class MethodNotAllowedError extends HttpError {
  constructor(message?: keyof typeof MethodNotAllowedMessages) {
    super(
      MethodNotAllowedMessages[message] ??
        MethodNotAllowedMessages["BASIC_ERROR"]
    );
    Object.setPrototypeOf(this, MethodNotAllowedError.prototype);
    this.statusCode = HttpStatusCode.MethodNotAllowed;
  }
}

export class NotAcceptableError extends HttpError {
  constructor(message?: keyof typeof NotAcceptableErrorMessages) {
    super(
      NotAcceptableErrorMessages[message] ??
        NotAcceptableErrorMessages["BASIC_ERROR"]
    );
    Object.setPrototypeOf(this, NotAcceptableError.prototype);
    this.statusCode = HttpStatusCode.NotAcceptable;
  }
}

export class UnsupportedMediaTypeError extends HttpError {
  constructor(message?: keyof typeof UnsupportedMediaTypeErrorMessages) {
    super(
      UnsupportedMediaTypeErrorMessages[message] ??
        UnsupportedMediaTypeErrorMessages["BASIC_ERROR"]
    );
    Object.setPrototypeOf(this, UnsupportedMediaTypeError.prototype);
    this.statusCode = HttpStatusCode.UnsupportedMediaType;
  }
}

/**
 *Burada, belirli bir isteğin, isteği tamamlayamamasına neden olan beklenmedik bir durumla karşılaştığı anlamına gelir.
 *Kullanıcının bu HTTP durum kodunu web sayfasında görmesi beklenmez.
 */
export class InternalServerError extends HttpError {
  constructor(message?: keyof typeof InternalServerErrorMessages) {
    super(
      InternalServerErrorMessages[message] ??
        InternalServerErrorMessages["BASIC_ERROR"]
    );
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.statusCode = HttpStatusCode.InternalServer;
  }
}
