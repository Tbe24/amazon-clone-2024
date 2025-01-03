import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/amazon-clone-2024/" : "/",
  plugins: [react()],
}));
