<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TextBlockSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="text-block__wrapper"
  >
  <prismic-rich-text :field="slice.primary.text_block_copy" class="text-block"/>
  </section>
</template>

<style lang="scss">
.text-block {
  font-family: var(--font-secondary);
  font-size: 1.5rem;

  &__wrapper {
    padding: 0.5rem 0;
  }

  span.special {
    color: var(--color-secondary);
  }
}
</style>
