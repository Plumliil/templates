import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { vitePluginForArco } from "@arco-plugins/vite-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {},
  },
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
  plugins: [
    vue(),
    vitePluginForArco({
      style: "css",
    }),
    Components({
      // 可以通过resolvers来支持 UI 框架组件的按需引入，如 Element Plus、Ant Design Vue等
      dirs: ["src/components"],
      extensions: ["vue"],
      deep: true, // 是否递归子目录
    }),
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-imports.d.ts", // 自动生成 TypeScript 声明文件
    }),
  ],
});
