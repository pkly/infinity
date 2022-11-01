import axios from "axios";
import {INFINITY_USER, GetRoute} from "../utils/ApiRoutes";

export default async function() {
    try {
        return (await axios.get(GetRoute(INFINITY_USER))).data;
    } catch (err) {
        return null;
    }
};