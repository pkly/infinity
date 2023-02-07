<script setup lang="ts">
import LoginForm from "../../components/Form/LoginForm.vue";
import router from "../../router";
import MainLayout from "../../layout/MainLayout.vue";
function onLogin() {
    router.push({ name: "dashboard" });
}
</script>

<template>
    <MainLayout>
        <LoginForm @login="onLogin" />
    </MainLayout>
</template>
