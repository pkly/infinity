import { defineStore } from "pinia";
import Menu from "../requests/Tools/Menu";

export const MenuStore = defineStore("menu", {
    state: () => {
        return {
            loaded: false,
            resources: [] as Record<string, any>[],
        };
    },
    actions: {
        async load(reload: boolean = false): Promise<boolean> {
            if (!reload && this.loaded) {
                return true;
            }

            const data = await Menu();

            this.loaded = true;
            if (null !== data) {
                // @ts-ignore
                this.resources = data.resources;
            }

            return null !== data;
        },
    },
});
