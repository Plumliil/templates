// @ts-ignore
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import router from "@/router";
import enUS from "@/locale/en-US";
import zhTW from "@/locale/zh-TW";
// import "@arco-design/web-vue/dist/arco.css";
import "@arco-themes/vue-00000001/index.less";
import "@/assets/style/main.css";
import registratDirectives from "@/directives";
const i18n = createI18n({
  locale: "zh-TW",
  fallbackLocale: "en-US",
  messages: {
    "en-US": enUS,
    "zh-TW": zhTW,
  },
});
const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(pinia);
app.use(ArcoVue, {
  // 用于改变使用组件时的前缀名称
  componentPrefix: "arco",
});
// 将 t 函数挂载到全局
app.config.globalProperties.$t = i18n.global.t;
// 注册自定义指令
registratDirectives(app);
app.mount("#app");
