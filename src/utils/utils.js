import {
  CONFLICT_MESSAGE,
  HTTP_STATUS_CONFLICT,
  HTTP_STATUS_INTERNAL_SERVER_ERROR,
  HTTP_STATUS_UNAUTHORIZED, INTERNAL_SERVER_MESSAGE,
  UNAUTHORIZED_MESSAGE
} from "./constants";

export function calcDuration(duration) {
  const minutes = Math.floor(duration % 60);
  const hours = Math.floor(duration / 60);
  return `${hours > 0 ? hours + 'ч ' : ''}${minutes}м`;
}

export function responseErrorHandler(status, defaultMessage) {
  switch (status) {
    case  HTTP_STATUS_UNAUTHORIZED:
      return UNAUTHORIZED_MESSAGE;
    case HTTP_STATUS_CONFLICT:
      return CONFLICT_MESSAGE;
    case HTTP_STATUS_INTERNAL_SERVER_ERROR:
      return INTERNAL_SERVER_MESSAGE;
    default:
      return defaultMessage;
  }
}