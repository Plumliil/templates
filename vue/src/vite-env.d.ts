/// <reference types="vite/client" />
import { ComponentCustomProperties } from "vue";
import { I18n } from "vue-i18n";

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: ComponentOptions | ComponentOptions["setup"];
  export default component;
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $t: I18n["global"]["t"];
  }
}
