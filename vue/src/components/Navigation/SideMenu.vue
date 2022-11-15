<script setup lang="ts">
import Menu from "../../requests/Tools/Menu";
import {reactive} from "vue";

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
      <div v-for="resource in state.resources">
        Resource: {{ resource }}
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