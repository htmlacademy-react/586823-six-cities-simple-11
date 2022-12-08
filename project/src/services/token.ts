const AUTH_TOKEN_NAME = 'user-token';

export type token = string;

export const getToken = (): token => {
  const token = localStorage.getItem(AUTH_TOKEN_NAME);
  return token ?? '';
};

export const setToken = (token: token) => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_NAME);
};
