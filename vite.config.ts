import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import path from "path";

export default defineConfig(({ command }) => ({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    // ✅ Nitro only during `vite build`, not `vite dev`
    ...(command === "build" ? [nitro({ preset: "vercel" })] : []),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));