import axios from "../../utils/Axios";
import {INFINITY_API_MENU} from "../../utils/ApiRoutes";

export default async function (): Promise<object|null> {
    const response = await axios.get(INFINITY_API_MENU);

    if (response.status === 200) {
        return response.data;
    }

    return null;
}