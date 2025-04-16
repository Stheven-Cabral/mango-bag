// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/prismic",
    "@vueuse/nuxt",
    "nuxt-icon",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Oswald: true,
          Raleway: true,
        },
      },
    ],
  ],
  runtimeConfig: {
    prismicAccessToken: process.env.NUXT_PRISMIC_ACCESS_TOKEN,
    public: {
      prismicAccessToken: process.env.NUXT_PRISMIC_ACCESS_TOKEN,
    },
  },
  prismic: {
    endpoint: "stheven-cabral-page",
    clientConfig: {
      routes: [
        {
          type: "lead_capture_page",
          path: "/",
        },
        {
          type: "about_me_page",
          path: "/about-me",
        },
        {
          type: "portfolio_page",
          path: "/portfolio",
        },
      ],
      accessToken: process.env.NUXT_PRISMIC_ACCESS_TOKEN,
    },
  },
  css: ["~/assets/styles/reset.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/common.scss";',
        },
      },
    },
  },
  imports: {
    presets: [
      {
        from: "@vueuse/core",
        imports: ["breakpointsMasterCss", "useBreakpoints"],
      },
    ],
  },
});
