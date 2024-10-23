<script setup lang="ts">
import { arcoLocale } from "@/utils";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
</script>
<template>
  <arco-config-provider :locale="arcoLocale[locale]">
    <arco-layout class="bg-[#f8f9fbff] h-screen">
      <arco-layout-sider
        hide-trigger
        collapsible
        class="bg-[#151C2EFF] w-[172px!important] relative"
      >
        <div
          class="rounded h-[86px] flex justify-center items-start px-[18px] pt-[18px]"
        >
          <RouterLink to="/">
            <img src="@/assets/vue.svg" alt="" />
          </RouterLink>
          <span class="text-[#FFFFFF99] text-[10px] mt-[5px] ml-[7px]"
            >V1.0.0.0</span
          >
        </div>

        <client-menu />
        <p
          class="absolute bottom-8 text-[#007AFFFF] left-[50%] translate-x-[-50%] underline"
        >
          <a href="https://www.plumliil.cn">www.plumliil.cn</a>
        </p>
      </arco-layout-sider>
      <arco-layout class="h-screen overflow-hidden">
        <arco-layout-header class="h-[50px] bg-[white] leading-[50px]">
          <client-header />
        </arco-layout-header>
        <arco-layout
          class="p-3 h-[calc(100vh_-_100px)!important] overflow-y-auto bg-[#F8F9FB]"
        >
          <arco-layout-content class="bg-[white] p-[10px]">
            <RouterView />
          </arco-layout-content>
        </arco-layout>
      </arco-layout>
    </arco-layout>
  </arco-config-provider>
</template>
