<script setup lang="ts">
import { reactive } from "vue";
import Login from "../../requests/AccessControl/Login";

const state = reactive({
    username: "",
    password: "",
});
const emit = defineEmits<{
    (e: "login"): void;
}>();

async function submit() {
    if (await Login(state.username, state.password)) {
        emit("login");
    }
}
</script>

<template>
    <v-form class="login-form">
        <h1 class="mb-5">Hello. Log in to continue.</h1>
        <v-text-field v-model="state.username" label="Username" required />
        <v-text-field v-model="state.password" label="Password" required />
        <v-btn :onclick="submit"> Submit </v-btn>
    </v-form>
</template>

<style lang="scss">
.login-form {
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
}
</style>
