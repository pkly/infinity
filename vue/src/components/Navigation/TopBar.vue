<script setup lang="ts">
import router from "../../router";
import Logout from "../../requests/AccessControl/Logout";
import { UserStore } from "../../stores/user";

const store = UserStore();

const emit = defineEmits<{
    (e: "toggle"): void;
}>();

async function logout() {
    await Logout();
    await router.push({ name: "login" });
}
</script>

<template>
    <v-app-bar>
        <v-app-bar-nav-icon @click="emit('toggle')" />
        <v-toolbar-title>Application</v-toolbar-title>

        <v-spacer />

        <v-list v-if="store.isAuthenticated()">
            <v-list-item prepend-avatar="" title="Admin" :subtitle="store.identifier" />
        </v-list>

        <template v-slot:append>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>
                        <v-list-item-title @click="logout">Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
    </v-app-bar>
</template>
