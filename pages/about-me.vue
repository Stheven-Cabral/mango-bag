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

// const componentsList = computed(() => components);
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
</style>