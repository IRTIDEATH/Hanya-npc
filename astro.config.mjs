// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'Hanya npc',
      social: {
          github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
          {
              label: 'Kenalan dari sini',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Kenapa npc', slug: 'kenalan/episode_1' },
              ],
          },
        //   {
        //       label: 'Reference',
        //       autogenerate: { directory: 'reference' },
        //   },
      ],
      customCss: [
        './src/styles/global.css'
      ],

  }), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});