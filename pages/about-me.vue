<script setup lang="ts">
import { components } from "~/slices";
const { client } = usePrismic();

const { data: document } = await useAsyncData('about-me', async () => {
  const document = await client.getSingle('about_me_page');

  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
</script>

<template>
  <div class="about-me-page">
    <Header :page-type="document?.type"/>
    <slice-zone 
      v-if="document" 
      wrapper="main" 
      :components="components"
      :slices="document.data.slices" 
      class="slice-zone about-me__slice-zone"
    />
  </div>
</template>

<style lang="scss">
.about-me-page {
  .slice-zone {
    .text-block__copy {
      p {
        line-height: 1.5rem;

        @media (min-width: $bp-sm) {
          line-height: 2.5rem;
        }
      }
    }

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