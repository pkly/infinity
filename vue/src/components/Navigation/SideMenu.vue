<template>
  <div id="side-menu">
    Side menu here
  </div>
</template>

<script setup lang="ts">
</script>

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