<script setup lang="ts">
import { components } from "~/slices";
const { client } = usePrismic();

const { data: document } = await useAsyncData('portfolio', async () => {
  const document = await client.getSingle('portfolio_page');

  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
</script>

<template>
  <div class="portfolio-page">
    <Header page-type="portfolio_page"/>
    Portfolio Page
    <slice-zone v-if="document" wrapper="main" :components="components" :slices="document.data.slices" class="slice-zone portfolio-page__slice-zone"/>
  </div>
</template>

<style lang="scss">
.portfolio-page {
  .slice-zone {
    a {
      color: var(--color-primary);
      text-decoration: underline solid 0.15rem var(--color-secondary);
      text-underline-offset: 0.2rem;
  
      &:hover,
      &:focus-visible {
        text-decoration: none;
      }
    }
  }
}
</style>