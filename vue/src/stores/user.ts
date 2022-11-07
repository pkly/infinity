import { defineStore } from 'pinia'

export const UserStore = defineStore('user', {
    state: () => {
        return {
            identifier: null as string|null,
            roles: [] as string[],
        };
    },
    actions: {
        set(login: object) {
            // @ts-ignore
            this.identifier = login.identifier;
        }
    }
});