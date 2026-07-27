// @ts-check
import { defineConfig } from 'astro/config';

//viene de google para meter los css para astro
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },

  //agregammos la internalización de idiomas
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    }
  }
});
