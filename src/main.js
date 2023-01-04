import { createApp } from "vue";

import App from "./App.vue";

// 引入element - plus

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
const app = createApp(App);
// 进行注册
app.use(ElementPlus);

// windicss能够覆盖element的样式
import "virtual:windi.css";

// 引入router并注册
import router from "./router";
app.use(router);

app.mount("#app");
