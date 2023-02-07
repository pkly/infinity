import axios from "axios";
import { UrlBase } from "./Utils";

export default axios.create({
    baseURL: UrlBase,
    responseType: "json",
});
