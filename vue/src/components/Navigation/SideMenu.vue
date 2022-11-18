<script setup lang="ts">
import {RouterLink} from "vue-router";
import {MenuStore} from "../../stores/menu";

const store = MenuStore();
store.load();
</script>

<template>
  <div id="side-menu">
    <div v-if="!store.loaded">
      Loading
    </div>
    <div v-else>
      <RouterLink :to="{name: 'dashboard'}">
        Dashboard
      </RouterLink>
      <div v-for="resource in store.resources">
        <RouterLink :to="{name: 'resource-index', query: {target: resource.class}}">
          {{ resource.label }}
        </RouterLink>
      </div>
    </div>
  </div>
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