import axios from "../../utils/Axios";
import {INFINITY_LOGIN} from "../../utils/ApiRoutes";
import {UserStore} from "../../stores/user";

export default async function(identifier: string, password: string): Promise<boolean> {
    try {
        const response = await axios.post(INFINITY_LOGIN, {
            username: identifier,
            password: password
        });
        if (response.status > 200) {
            return false;
        }

        UserStore().set(response.data);
        return true;
    } catch (err) {
        return false;
    }
};