const APP_TOKEN = 'app_token';

export function setToken(token) {
  return sessionStorage.setItem(APP_TOKEN, token);
}

export function getToken() {
  return sessionStorage.getItem(APP_TOKEN);
}

export function removeToken() {
  return sessionStorage.removeItem(APP_TOKEN);
}
