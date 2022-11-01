<script setup lang="ts">
import logo from '../../assets/logo.svg'
import {MDBNavbarBrand, MDBNavbar} from "mdb-vue-ui-kit";
</script>

<template>
  <MDBNavbar class="mb-5" dark bg="dark" container>
    <MDBNavbarBrand fluid=true>
      <img :src="logo" id="logo" alt="Vue logo" />
    </MDBNavbarBrand>
    dddddddddd
  </MDBNavbar>
</template>

<style lang="scss">
#logo {
  width: 50px;
}
</style>