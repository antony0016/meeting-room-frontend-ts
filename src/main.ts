import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import zhTw from "element-plus/lib/locale/lang/zh-tw";
// import zhTw from "element-plus/lib/locale/lang/;

const vm = createApp(App).use(createPinia()).use(router);

vm.use(ElementPlus, { locale: zhTw });

vm.mount("#app");
