<script setup lang="ts">
import {RouterView} from 'vue-router'
</script>

<template>
  <div id="vue-app">
    <RouterView />
  </div>
</template>

<style lang="scss">
#vue-app {
  display: flex;
  min-height: 100vh;
}
</style>