import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

export default defineConfig({
  plugins: [
    sveltekit(),
    viteStaticCopy({
      targets: [
        {
          src: "./schema.sql",
          dest: "./",
        },
      ],
    }),
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});
