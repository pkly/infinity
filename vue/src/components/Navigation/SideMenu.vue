<script setup lang="ts">
import { RouterLink } from "vue-router";
import { MenuStore } from "../../stores/menu";

const store = MenuStore();
store.load();
</script>

<template>
    <v-navigation-drawer permanent>
        <div v-if="!store.loaded">Loading...</div>
        <div v-else>
            <v-list density="compact" nav>
                <RouterLink :to="{ name: 'dashboard' }">
                    <v-list-item prepend-icon="mdi-folder" title="Dashboard" />
                </RouterLink>
                <RouterLink
                    v-for="resource in store.resources"
                    :key="resource.label"
                    :to="{ name: 'resource-index', query: { target: resource.class } }"
                >
                    <v-list-item :title="resource.label" />
                </RouterLink>
            </v-list>
        </div>
    </v-navigation-drawer>
</template>

<style lang="scss">
#side-menu {
    width: 300px;

    &.hidden {
        width: 50px;
    }

    &.invisible {
        width: 0;
    }
}
</style>
