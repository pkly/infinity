<script lang="ts">
import LoginForm from "../../components/Form/LoginForm.vue";
import router from "../../router";
import {defineComponent} from "vue";

export default defineComponent({
  components: {LoginForm},
  methods: {
    onLogin() {
      router.push({name: 'dashboard'});
    }
  }
});
</script>

<template>
  <LoginForm @login="onLogin" />
</template>