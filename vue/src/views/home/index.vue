<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
</script>

<template>
  <div>{{ t("views.home.msg", { msg: locale }) }}</div>
</template>

<style scoped></style>
