import axios from "../../utils/Axios";
import { ApiBuilder } from "../../utils/ApiRoutes";
import ActionEnum from "../../enum/Api/ActionEnum";
import TypeEnum from "../../enum/Api/TypeEnum";

export default async function (): Promise<object | null> {
    const response = await axios.get(ApiBuilder(ActionEnum.Index, TypeEnum.Tool, "Infinity\\Tool\\MenuTool"));

    if (response.status === 200) {
        return response.data;
    }

    return null;
}
