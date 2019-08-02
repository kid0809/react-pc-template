export const setToken = (tokenKey, token) => {
  window.localStorage.setItem(tokenKey, token);
};

export const getToken = (tokenKey) => {
  return window.localStorage.getItem(tokenKey);
};

export const clearToken = (tokenKey) => {
  window.localStorage.removeItem(tokenKey);
};
