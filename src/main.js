import { createApp } from "vue";
import router from "./router/index";
import App from "./App.vue";
import "./styles/main.scss";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
