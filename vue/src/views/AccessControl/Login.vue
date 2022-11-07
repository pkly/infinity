<script setup lang="ts">
import LoginForm from "../../components/Form/LoginForm.vue";
import router from "../../router";
import EmptyLayout from "../../layout/EmptyLayout.vue";

function onLogin() {
  router.push({name: 'dashboard'});
}
</script>

<template>
  <EmptyLayout>
    <LoginForm @login="onLogin" />
  </EmptyLayout>
</template>