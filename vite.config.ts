import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";
import { normalizePath } from "vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve(__dirname, "./schema.sql")),
          dest: "./",
        },
      ],
    }),
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});
