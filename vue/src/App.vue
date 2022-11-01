<script setup lang="ts">
import {RouterView} from 'vue-router'
import {MDBContainer} from "mdb-vue-ui-kit";
import TopBar from './components/Navigation/TopBar.vue'
import SideMenu from "./components/Navigation/SideMenu.vue";
</script>

<template>
  <div id="vue-app">
    <SideMenu />
    <section id="app-main">
      <TopBar />
      <MDBContainer fluid>
        <RouterView />
      </MDBContainer>
    </section>
  </div>
</template>

<style lang="scss">
#vue-app {
  display: flex;

  #app-main {
    flex-grow: 1;
  }
}
</style>