import axios from "../../utils/Axios";
import { INFINITY_LOGIN } from "../../utils/ApiRoutes";
import { UserStore } from "../../stores/user";

const store = UserStore();

export default async function (identifier: string, password: string): Promise<boolean> {
    try {
        const response = await axios.post(INFINITY_LOGIN, {
            username: identifier,
            password: password,
        });
        if (response.status > 200) {
            return false;
        }

        store.set(response.data);
        return true;
    } catch (err) {
        return false;
    }
}
