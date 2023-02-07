export const INFINITY_USER = "/user";
export const INFINITY_LOGOUT = "/logout";
export const INFINITY_LOGIN = "/login";
export const INFINITY_API = "/api";

export const ApiBuilder = (action: string, type: string, target: string): string => {
    const params = new URLSearchParams();
    params.set("action", action);
    params.set("type", type);
    params.set("target", target);

    return INFINITY_API + "?" + params.toString();
};
