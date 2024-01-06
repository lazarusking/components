import { UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config: UserConfig = {
    plugins: [react()],
    base: "/",
  };
  if (command !== "serve") {
    config.base = "/components/";
  }
  return config;
});
