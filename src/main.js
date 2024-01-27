import { createApp } from "vue";
import "./style.styl";
import App from "./App.vue";
import adminApp from "./admin/main.vue";
import router from "./router";
import adminRouter from "./admin/router";
import axios from "axios";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
const baseURL = import.meta.env.APP_BASE_URL;
window.baseURL = baseURL;
console.log(baseURL);
axios.defaults.baseURL = baseURL;

window.isAdmin = document.location.pathname.indexOf("admin") != -1;

let v = localStorage.getItem("likeList");
if (!v) {
  localStorage.setItem("likeList", JSON.stringify([]));
}
// let app;

// if (isAdmin) {
//   app = createApp(adminApp);
//   app.use(adminRouter);
// } else {
let app = createApp(App);
app.use(router);
// }

app.use(ElementPlus);
app.mount("#app");
