const AUTH_EMAIL_NAME = 'user-email';

export type email = string;

export const getEmail = (): email => {
  const email = localStorage.getItem(AUTH_EMAIL_NAME);
  return email ?? '';
};

export const setEmail = (email: email) => {
  localStorage.setItem(AUTH_EMAIL_NAME, email);
};

export const dropEmail = (): void => {
  localStorage.removeItem(AUTH_EMAIL_NAME);
};
