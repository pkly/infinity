<script setup lang="ts">
import { reactive } from "vue";
import TopBar from "../components/Navigation/TopBar.vue";
import SideMenu from "../components/Navigation/SideMenu.vue";

let state = reactive({
    drawer: false,
});
</script>

<template>
    <v-app id="infinity" theme="dark">
        <TopBar @toggle="state.drawer = !state.drawer" />
        <SideMenu />

        <v-main>
            <v-container>
                <slot></slot>
            </v-container>
        </v-main>
    </v-app>
</template>
