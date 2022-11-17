<script setup lang="ts">
import logo from '../../assets/logo.svg'
import {MDBNavbarBrand, MDBNavbar, MDBBtn} from "mdb-vue-ui-kit";
import router from "../../router";
import Logout from "../../requests/AccessControl/Logout";
import {UserStore} from "../../stores/user";

const store = UserStore();

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
    <div class="ms-auto me-2">
      {{ store.identifier }}
    </div>
    <MDBBtn @click="logout" color="secondary">log out</MDBBtn>
  </MDBNavbar>
</template>

<style lang="scss">
#logo {
  width: 50px;
}
</style>