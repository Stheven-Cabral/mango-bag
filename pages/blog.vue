<script setup lang="ts">
// import { components } from "~/slices";
// const { client } = usePrismic();

// const { data: document } = await useAsyncData('blog', async () => {
//   const document = await client.getSingle('blog_page');

//   if (document) {
//     return document;
//   } else {
//     throw createError({ statusCode: 404, message: "Page not found" });
//   }
// });
</script>

<template>
  <div class="blog-page">
    Blog Page
    <Header page-type="blog_page"/>
    <!-- <Header :page-type="document?.type"/>
    <slice-zone v-if="document" wrapper="main" :components="components" :slices="document.data.slices" class="blog-page__slices"/> -->
  </div>
</template>

<style lang="scss">
</style>