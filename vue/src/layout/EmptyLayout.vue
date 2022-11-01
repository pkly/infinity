<script setup lang="ts">
import {MDBContainer} from "mdb-vue-ui-kit";
</script>

<template>
  <MDBContainer id="empty-container">
    <slot></slot>
  </MDBContainer>
</template>

<style lang="scss">
#vue-app {
  #empty-container {
    align-self: center;
  }
}
</style>