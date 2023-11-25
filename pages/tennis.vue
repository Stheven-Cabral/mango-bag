<script setup lang="ts">
// import { components } from "~/slices";
// const { client } = usePrismic();

// const { data: document } = await useAsyncData('tennis', async () => {
//   const document = await client.getSingle('tennis_page');

//   if (document) {
//     return document;
//   } else {
//     throw createError({ statusCode: 404, message: "Page not found" });
//   }
// });
</script>

<template>
  <div class="tennis-page">
    Tennis Page
    <Header page-type="tennis_page"/>
    <!-- <Header :page-type="document?.type"/>
    <slice-zone v-if="document" wrapper="main" :components="components" :slices="document.data.slices" class="tennis__slices"/> -->
  </div>
</template>

<style lang="scss">
</style>