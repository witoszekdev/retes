import type { BodyInit, HeadersInit } from "./types"

export class Response {
  body: BodyInit 
  status: number
  statusText?: string
  headers?: HeadersInit
  type?: string
  encoding?: string

  constructor(body: BodyInit, { status = 200, headers = {} } = {}){
    return { body, status, headers, };
  }

  //
  // 2xx
  //
  static OK(body: BodyInit = "", headers = {}) {
    return { body, status: 200, headers };
  }

  static Created(body: BodyInit = "", headers = {}) {
    return { body, status: 201, headers };
  }

  static NotFound(headers = {}) {
    return { body: "Not Found", status: 404, type: "text/html", headers };
  }

  static Accepted(body: BodyInit = "", headers = {}) {
    return { body, status: 202, headers };
  }

  static NoContent(headers = {}) {
    return { body: "", status: 204, headers };
  }

  //
  // 3xx
  //

  static Redirect(url: string, status = 302, headers = {}) {
    return { 
      body: "Redirecting...", 
      status, 
      headers: {
        ...headers,
        Location: url
      }
    };
  }

  //
  // 4xx
  //

  static BadRequest(body: BodyInit = "") {
    return { body, status: 400 };
  }

  static Unauthorized() {
    return { body: "", status: 401 };
  }

  static Forbidden(body: BodyInit = "") {
    return { body, status: 403 };
  }

  static MethodNotAllowed() {
    return { body: "", status: 405 };
  }

  static NotAcceptable() {
    return { body: "", status: 406 };
  }

  static Conflict(body: BodyInit = "") {
    return { body, status: 409 };
  }

  //
  // 5xx
  //

  static InternalServerError(body: BodyInit = "", headers = {}) {
    return { body, status: 500, headers };
  }

}


export enum Status {
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,
  EarlyHints = 103,
  OK = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInfo = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  IMUsed = 226,

  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,

  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  RequestEntityTooLarge = 413,
  RequestURITooLong = 414,
  UnsupportedMediaType = 415,
  RequestedRangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  Teapot = 418,
  MisdirectedRequest = 421,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  TooEarly = 425,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,

  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HTTPVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
}
