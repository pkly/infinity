export const INFINITY_USER = '/user';
export const INFINITY_LOGOUT = '/logout';
export const INFINITY_LOGIN = '/login';
export const INFINITY_API = '/api';
export const INFINITY_API_MENU = '/api/menu';

export const ApiBuilder = (resource: string, action: string|null = null): string => {
    const params = new URLSearchParams();
    params.set('resource', resource);

    if (null !== action) {
        params.set('action', action);
    }

    return INFINITY_API + "?" + params.toString();
}