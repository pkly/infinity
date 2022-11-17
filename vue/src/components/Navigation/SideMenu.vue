<script setup lang="ts">
import Menu from "../../requests/Tools/Menu";
import {reactive} from "vue";
import {RouterLink} from "vue-router";

const state = reactive({
  resources: null as string[]|null,
});

Menu().then((data) => {
  // @ts-ignore
  state.resources = data.resources;
});
</script>

<template>
  <div id="side-menu">
    <div v-if="state.resources === null">
      Loading
    </div>
    <div v-else>
      <RouterLink :to="{name: 'dashboard'}">
        Dashboard
      </RouterLink>
      <div v-for="resource in state.resources">
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