// @ts-check
import { defineConfig } from 'astro/config';

//viene de google para meter los css para astro
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },

  // añadimos los plugins de css tailwindcss para astro
  vite: {
    plugins: [tailwindcss()],
  },

  // agregammos la internalización de idiomas a la configuración
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    }
  }
});
