import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// import BalmUI from "balm-ui";
// import BalmUIPlus from "balm-ui/dist/balm-ui-plus";
// import "balm-ui/dist/balm-ui.css";
// import $theme from "balm-ui/plugins/theme";

// import "element-plus/lib/components";
// vm.use(BalmUI, {}).use(BalmUIPlus);

import zhTw from "element-plus/lib/locale/lang/zh-tw";

const vm = createApp(App).use(createPinia()).use(router);

vm.use(ElementPlus, { locale: zhTw });

vm.mount("#app");
