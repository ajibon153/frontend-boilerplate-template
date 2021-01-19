import { parse } from 'cookie';
import { Cookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';
import { publicRuntimeConfig } from '../config';

const {
  NEXT_PUBLIC_JWT_EXPIRATION_IN_HOURS: envCookieExpirationInHours,
} = publicRuntimeConfig;

const cookies = new Cookies();
const cookieName = 'jwt';

const defaultCookieExpirationInHours = 7 * 24;
const cookieAgeInHours = Number(envCookieExpirationInHours || defaultCookieExpirationInHours);
const cookieAge = cookieAgeInHours * 60 * 60 * 1000;

export const getCookieJWT = (req) => {
  if (typeof window === 'undefined') {
    return parse(req?.headers.cookie || '')[cookieName];
  }
  return cookies.get(cookieName);
};

export const getDecodedJWT = (req) => {
  let auth = {};
  try {
    auth = jwtDecode(getCookieJWT(req));
  } catch (err) {
    // Not authenticated
  }
  return auth;
  // IMPORTANT NOTE: if user is not authenticated, auth is equal to {}, NOT undefined or null
};

export const setCookieJWT = (value) => {
  cookies.set(cookieName, value, {
    secure: false,
    domain: window.location.hostname,
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
    expires: new Date(Date.now() + cookieAge),
  });
};

export const removeCookieJWT = () => {
  cookies.remove(cookieName, {
    secure: false,
    domain: window.location.hostname,
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
  });
};
