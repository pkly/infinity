import {UrlBase} from "./Utils";

export const INFINITY_USER = '/user';
export const INFINITY_LOGOUT = '/logout';

export const GetRoute = (apiRoute: string): string => UrlBase + apiRoute;