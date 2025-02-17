// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Hanya npc",
      customCss: ['./src/styles/ui-style.css'],
      social: {
        github: "https://github.com/IRTIDEATH/Hanya-npc",
      },
      sidebar: [
        {
          label: "Kenalan dari sini",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Kenapa npc", slug: "kenalan/episode_1" },
          ],
        },
        {
          label: "Article",
          items: [{ label: "Discord wpu", slug: "article/episode_1" }],
        },
      ],
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});