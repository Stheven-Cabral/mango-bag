<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.PortfolioCardsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="portfolio-cards__wrapper"
  >
    <div class="portfolio-cards__headline-wrapper">
      <prismic-rich-text
        :field="slice.primary.headline"
        class="portfolio-cards__headline"
      />
    </div>
    <div class="portfolio-cards__description-wrapper">
      <prismic-rich-text
        :field="slice.primary.description"
        class="portfolio-cards__description"
      />
    </div>
    <div class="portfolio-cards__examples">
      <div v-for="example in slice.items" class="portfolio-cards__example">
        <prismic-image :field="example.work_example_image" class="portfolio-cards__example-image"/>
        <div>{{ example.work_example_title }}</div>
        <div>{{ example.work_example_description }}</div>
        <div>{{ example.work_example_skills }}</div>
        <a :href="`${example.work_example_link}`"></a>
        <a :href="`${example.work_example_code_link}`"></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.portfolio-cards {
  font-size: 1.25rem;
  font-family: var(--font-secondary);
  color: var(--color-primary);

  @media (min-width: $bp-sm) {
    font-size: 1.5rem;
  }

  h1 { 
    font-size: 1.75em;
  }

  h2 { 
    font-size: 1.25em;
  }

  &__headline {
    font-family: var(--font-primary);
  }

  &__example {
    &-image {
      height: 15rem;
      widows: 15rem;
    }
  }
}
</style>
