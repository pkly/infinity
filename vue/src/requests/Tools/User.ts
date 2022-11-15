import axios from "../../utils/Axios";
import {ApiBuilder} from "../../utils/ApiRoutes";
import {UserStore} from "../../stores/user";
import ActionEnum from "../../enum/Api/ActionEnum";
import TypeEnum from "../../enum/Api/TypeEnum";

export default async function(): Promise<object|null> {
    try {
        const data = (await axios.get(ApiBuilder(ActionEnum.Index, TypeEnum.Tool, 'Infinity\\Tool\\UserTool'))).data;
        UserStore().set(data);

        return data;
    } catch (err) {
        return null;
    }
};