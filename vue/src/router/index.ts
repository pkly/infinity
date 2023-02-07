import { createRouter, createWebHistory } from "vue-router";
import { UrlBase } from "../utils/Utils";
import { UserStore } from "../stores/user";

const router = createRouter({
    history: createWebHistory(UrlBase), // import.meta.env.BASE_URL ||
    routes: [
        {
            path: "/",
            name: "login",
            component: () => import("../views/AccessControl/Login.vue"),
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("../views/Dashboard.vue"),
        },
        {
            path: "/resource/index",
            name: "resource-index",
            component: () => import("../views/Resource/Index.vue"),
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    const store = UserStore();

    if (to.name !== "login" && !(await store.isAuthenticated(true))) {
        next({ name: "login" });
    } else {
        next();
    }
});

export default router;
