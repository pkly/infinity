<script setup lang="ts">
import {MDBContainer} from "mdb-vue-ui-kit";
import TopBar from '../components/Navigation/TopBar.vue'
import SideMenu from "../components/Navigation/SideMenu.vue";
</script>

<template>
  <SideMenu />
  <section id="app-main">
    <TopBar />
    <MDBContainer fluid>
      <slot></slot>
    </MDBContainer>
  </section>
</template>

<style lang="scss">
#vue-app {
  #app-main {
    flex-grow: 1;
  }
}
</style>