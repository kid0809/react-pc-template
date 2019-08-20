import Cookie from 'js-cookie';
export const setToken = (tokenKey, token) => {
  window.localStorage.setItem(tokenKey, token);
};

export const getToken = (tokenKey) => {
  return window.localStorage.getItem(tokenKey);
};

export const clearToken = (tokenKey) => {
  window.localStorage.removeItem(tokenKey);
};

export const setCookie = (name, value, ops) => {
  Cookie.set(name, value, ops);
};

export const getCookie = (name, json = false, ops) => {
  return Cookie[json ? 'getJSON' : 'get'](name, ops);
};

export const removeCookie = (name, ops) => {
  Cookie.remove(name, ops);
};

export const removeAllCookie = () => {
  // 专清没有name值的cookie
  document.cookie = `=0;expires=${new Date(0).toUTCString()}`;
  Object.keys(Cookie.get()).map((item) => {
    document.cookie = `${item}=0;expires=${new Date(0).toUTCString()}`;
  });
};

export const setAlert = (text, type = 'success') => {
  Cookie.set('THIS_IS_GLOBAL_ALERT_NOT_USE', {
    text,
    type
  });
};
