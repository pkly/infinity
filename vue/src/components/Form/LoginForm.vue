<script setup lang="ts">
import {reactive} from "vue";
import {MDBInput, MDBBtn} from "mdb-vue-ui-kit";
import Login from "../../requests/AccessControl/Login";

const state = reactive({
  username: '',
  password: ''
});
const emit = defineEmits<{
  (e: 'login'): void
}>();

async function submit() {
  if (await Login(state.username, state.password)) {
    emit('login');
  }
}

</script>

<template>
  <form class="login-form">
    <h1 class="mb-5">Hello. Log in to continue.</h1>
    <MDBInput label="Username" v-model="state.username" class="mb-3"/>
    <MDBInput label="Password" v-model="state.password" type="password" class="mb-3"/>
    <MDBBtn color="primary" :onclick="submit">Submit</MDBBtn>
  </form>
</template>

<style lang="scss">
.login-form {
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
}
</style>