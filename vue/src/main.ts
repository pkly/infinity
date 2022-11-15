import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import 'mdb-vue-ui-kit/css/mdb.dark.min.css';
import GetUser from "./requests/Tools/User";

const app = createApp(App);

// we're hiding the nasty load flashbang by default
// @ts-ignore
document.querySelector("body").style.opacity = "1";

app.use(createPinia())
app.use(router)

app.mount('#app')

GetUser().then((r) => {
    if (r === null) {
        router.replace({name: 'login'});
    }
});
