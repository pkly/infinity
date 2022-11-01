import axios from "axios";
import {INFINITY_LOGOUT, GetRoute} from "../utils/ApiRoutes";

export default async function(): Promise<void> {
    try {
        await axios.get(GetRoute(INFINITY_LOGOUT));
    } catch (err) {}
};