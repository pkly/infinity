import axios from "../../utils/Axios";
import { INFINITY_LOGOUT } from "../../utils/ApiRoutes";

export default async function (): Promise<void> {
    try {
        await axios.get(INFINITY_LOGOUT);
    } catch (err) {}
}
