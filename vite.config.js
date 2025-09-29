import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/OAlvarezOliveira.github.io/",  // 👈 nombre exacto del repo
  plugins: [react()],
});
