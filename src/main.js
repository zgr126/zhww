import { createApp } from "vue";
import "./style.styl";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

axios.defaults.baseURL = import.meta.env.APP_BASE_URL
const app = createApp(App);
app.use(router);
app.use(ElementPlus)
app.mount("#app");
