const BadRequestErrorMessages = {
  BASIC_ERROR: _createBasicError("Bad Request"),
  NonFieldMail: "Mail boş olamaz",
  hasanaselam: "selam hasan",
  emptyMail: "mail boş olamaz",
};

const UnauthorizedErrorMessages = {
  BASIC_ERROR: _createBasicError("Unauthorized"),
};

const ForbiddenErrorMessages = {
  BASIC_ERROR: _createBasicError("Forbidden"),
};

const NotFoundErrorMessages = {
  BASIC_ERROR: _createBasicError("Not Found"),
};

const MethodNotAllowedMessages = {
  BASIC_ERROR: _createBasicError("Method Not Allowed"),
};

const NotAcceptableErrorMessages = {
  BASIC_ERROR: _createBasicError("Not Acceptable"),
};

const UnsupportedMediaTypeErrorMessages = {
  BASIC_ERROR: _createBasicError("Unsupported Media Type"),
};

const InternalServerErrorMessages = {
  BASIC_ERROR: _createBasicError("Internal Server"),
};
const SystemErrorMessage = {
  ProcessError : "İşlem sırasında hata oluştu."
  }
function _createBasicError(message: string): string {
  return ` ${message} Error`;
}

export {
  BadRequestErrorMessages,
  UnauthorizedErrorMessages,
  ForbiddenErrorMessages,
  NotAcceptableErrorMessages,
  MethodNotAllowedMessages,
  NotFoundErrorMessages,
  UnsupportedMediaTypeErrorMessages,
  InternalServerErrorMessages,
  SystemErrorMessage
};
