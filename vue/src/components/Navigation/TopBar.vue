<script setup lang="ts">
import logo from '../../assets/logo.svg'
import {MDBNavbarBrand, MDBNavbar, MDBBtn} from "mdb-vue-ui-kit";
import router from "../../router";
import Logout from "../../requests/Logout";

async function logout() {
  await Logout();
  await router.push({name: 'login'});
}
</script>

<template>
  <MDBNavbar class="mb-5" dark bg="dark" container>
    <MDBNavbarBrand fluid=true>
      <img :src="logo" id="logo" alt="Vue logo" />
    </MDBNavbarBrand>
    <MDBBtn @click="logout" color="secondary">log out</MDBBtn>
  </MDBNavbar>
</template>

<style lang="scss">
#logo {
  width: 50px;
}
</style>