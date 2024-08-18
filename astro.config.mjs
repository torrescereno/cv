import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    port: 4000,
  },
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});

