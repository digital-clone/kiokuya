import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://digital-clone.github.io',
  base: '/kiokuya',
  integrations: [
    starlight({
        title: "DigitalCloneV",
        sidebar: [
            {
                label: "導入方法",
                autogenerate: {directory: "install"},
            },
        ],
        favicon: "/favicon.ico",
    }
    )],
});