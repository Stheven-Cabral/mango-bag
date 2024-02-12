<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps({
  ...getSliceComponentProps<Content.SectionTitleSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
}
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="section-title__wrapper"
  >
    <prismic-rich-text :field="slice.primary.section_title_text" class="section-title"/>
  </section>
</template>

<style lang="scss">
.section-title {
  color: var(--color-primary);
  font-size: 2.5rem;
  font-family: var(--font-primary);

  @media (min-width: $bp-sm) {
    font-size: 3rem;
  }

  &__wrapper {
    padding: 1rem 0;
  }
}
</style>
