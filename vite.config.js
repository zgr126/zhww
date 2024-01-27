import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  envPrefix: "APP_", //APP_  为自定义开头名
  // publicDir: "/web",

  css: {
    preprocessorOptions: {
      stylus: {
        imports: [
          path.resolve(__dirname, "./src/style.styl"),
          path.resolve(__dirname, "./src/define.styl"),
        ],
      },
    },
  },
  base: "/web",
});
