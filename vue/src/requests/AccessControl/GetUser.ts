import axios from "../../utils/Axios";
import {INFINITY_USER} from "../../utils/ApiRoutes";
import {UserStore} from "../../stores/user";

export default async function(): Promise<object|null> {
    try {
        const data = (await axios.get(INFINITY_USER)).data;
        UserStore().set(data);

        return data;
    } catch (err) {
        return null;
    }
};