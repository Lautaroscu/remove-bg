import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import autoprefixer from "autoprefixer";
import "tailwindcss"
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
      
    }),
  ],
};
