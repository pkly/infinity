import { defineStore } from "pinia";
import User from "../requests/Tools/User";

export const UserStore = defineStore("user", {
    state: () => {
        return {
            identifier: null as string | null,
            roles: [] as string[],
        };
    },
    actions: {
        set(login: object) {
            // @ts-ignore
            this.identifier = login.user.identifier;
        },
        async isAuthenticated(attemptCheck: boolean = false): Promise<boolean> {
            if (attemptCheck && null === this.identifier) {
                const data = await User();

                if (null !== data) {
                    this.set(data);
                }
            }

            return null !== this.identifier;
        },
    },
});
