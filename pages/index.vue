<script setup lang="ts">
import { components } from "~/slices";
const { client } = usePrismic();

const { data: document } = await useAsyncData("home", async () => {
  const document = await client.getSingle("lead_capture_page");

  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
</script>

<template>
  <div class="lead-capture-page">
    <Header :page-type="document?.type" />
    <slice-zone
      v-if="document"
      wrapper="main"
      :components="components"
      :slices="document.data.slices"
      class="slice-zone lead-capture-page__slice-zone"
    />
  </div>
</template>

<style lang="scss">
.lead-capture-page {
  &__slice-zone {
    .text-block {
      font-weight: 700;
    }
  }
}
</style>
