<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const localeMap = [
  {
    value: "zh-TW",
    label: "繁體中文",
  },
  {
    value: "en-US",
    label: "English",
  },
];
const curLocale = computed(() => {
  return localeMap.find((item) => item.value === locale.value)?.label;
});

const langChangeHandle = (value: any) => {
  locale.value = value;
};
const handleSelect = (v: any) => {
  console.log(v);
};
</script>

<template>
  <div class="flex h-full justify-end items-center px-6 cursor-move">
    <arco-space :size="25">
      <arco-badge :count="9" dot :offset="[2, -2]">
        <IconNotification
          class="cursor-pointer"
          :style="{ color: '#888', fontSize: '18px', verticalAlign: '-3px' }"
        />
      </arco-badge>
      <div class="flex justify-around items-center">
        <arco-dropdown
          trigger="hover"
          @select="langChangeHandle"
          :popup-max-height="false"
        >
          <p class="cursor-pointer flex group">
            {{ curLocale }}
            <img
              class="ml-[6px] group-hover:rotate-180"
              src="@/assets/images/compoents/client-header/down.svg"
              alt=""
            />
          </p>
          <template #content>
            <arco-doption v-for="item in localeMap" :value="item.value">{{
              item.label
            }}</arco-doption>
          </template>
        </arco-dropdown>
        <p class="w-[1px] h-[12px] bg-[black] mx-[10px]" />
        <arco-dropdown
          trigger="hover"
          @select="handleSelect"
          :popup-max-height="false"
        >
          <p class="cursor-pointer flex group">
            asdzxc@163.com
            <img
              class="ml-[6px] group-hover:rotate-180"
              src="@/assets/images/compoents/client-header/down.svg"
              alt=""
            />
          </p>
          <template #content>
            <arco-doption>Option 1</arco-doption>
            <arco-doption>Option 8</arco-doption>
            <arco-doption>Option 9</arco-doption>
          </template>
        </arco-dropdown>
      </div>
    </arco-space>
  </div>
</template>
