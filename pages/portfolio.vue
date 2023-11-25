<script setup lang="ts">
// import { components } from "~/slices";
// const { client } = usePrismic();

// const { data: document } = await useAsyncData('portfolio', async () => {
//   const document = await client.getSingle('portfolio_page');

//   if (document) {
//     return document;
//   } else {
//     throw createError({ statusCode: 404, message: "Page not found" });
//   }
// });
</script>

<template>
  <div class="portfolio-page">
    <Header page-type="portfolio_page"/>
    <!-- <Header :page-type="document?.type"/> -->
    Portfolio Page
    <!-- <slice-zone v-if="document" wrapper="main" :components="components" :slices="document.data.slices" class="portfolio-page__slices"/> -->
  </div>
</template>

<style lang="scss">
</style>