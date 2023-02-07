import axios from "../../utils/Axios";
import { ApiBuilder } from "../../utils/ApiRoutes";
import ActionEnum from "../../enum/Api/ActionEnum";
import TypeEnum from "../../enum/Api/TypeEnum";

export default async function (): Promise<object | null> {
    try {
        return (await axios.get(ApiBuilder(ActionEnum.Index, TypeEnum.Tool, "Infinity\\Tool\\UserTool"))).data;
    } catch (err) {
        return null;
    }
}
