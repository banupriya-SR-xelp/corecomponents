export const REQUESTING = "REQUESTING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export function getCookie(cookieName) {
  let match = document.cookie.match(new RegExp(cookieName + `=([^;]+)`));
  if (match) return match[1];
  else {
    return null;
  }
}
