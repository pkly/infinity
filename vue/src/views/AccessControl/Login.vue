<script lang="ts">
import LoginForm from "../../components/Form/LoginForm.vue";
import router from "../../router";
import {defineComponent} from "vue";
import EmptyLayout from "../../layout/EmptyLayout.vue";

export default defineComponent({
  components: {EmptyLayout, LoginForm},
  methods: {
    onLogin() {
      router.push({name: 'dashboard'});
    }
  }
});
</script>

<template>
  <EmptyLayout>
    <LoginForm @login="onLogin" />
  </EmptyLayout>
</template>