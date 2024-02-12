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

const componentId = computed(() => {
  return props.slice.primary.html_id as string;
});

const introTextAlignment = computed(() => {
  return props.slice.primary.text_alignment.toLocaleLowerCase();
});

const introTextClasses = computed(() => {
  return {
    'portfolio-cards__intro-text': true,
    [`portfolio-cards__intro-text--align-${introTextAlignment.value}`]: true,
  }
});

const portfolioExamples = computed(() => {
  return props.slice.items;
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="portfolio-cards__wrapper"
  >
    <div class="portfolio-cards__jump-tag" :id="componentId"/>
    <div class="portfolio-cards">
      <div :class="introTextClasses">
        <prismic-rich-text
          :field="slice.primary.headline"
          class="portfolio-cards__headline"
        />
        <prismic-rich-text
          :field="slice.primary.description"
          class="portfolio-cards__description"
        />
      </div>
      <div class="portfolio-cards__examples">
        <portfolio-card :portfolio-examples="portfolioExamples" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.portfolio-cards {
  font-size: 1rem;
  font-family: var(--font-secondary);
  color: var(--color-primary);

  @media (min-width: $bp-sm) {
    font-size: 1.25rem;
  }

  @media (min-width: $bp-xl) {
    font-size: 1.5rem;
  }

  h1 { 
    font-size: 1.75em;
  }

  h2 { 
    font-size: 1.25em;
  }

  &__wrapper {
    position: relative;
  }

  &__jump-tag {
    display: block;
    position: absolute;
    top: -100px;
  }

  &__intro-text {
    padding-top: 1.5rem;

    &--align-left {
      text-align: left;
    }

    &--align-center {
      text-align: center;
    }

    &--align-right {
      text-align: right;
    }
  }

  &__headline {
    font-family: var(--font-primary);
  }

  &__description {
    padding-top: 1.5rem;

    p {
      line-height: 2.25rem;
    }
  }

  &__examples {
    padding-top: 1.5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
}
</style>
