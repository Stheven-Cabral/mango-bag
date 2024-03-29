<script setup lang="ts">
import { Content } from "@prismicio/client";
import SliceSimulator from "~/pages/slice-simulator.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.ContentNavigationSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const textAlignment = computed(() => {
  return props.slice.primary.text_alignment.toLocaleLowerCase();
});

const contentNavigationWrapperClasses = computed(() => {
  return {
    'content-navigation__wrapper': true,
    [`content-navigation__wrapper--text-${textAlignment.value}`]: true, 
  }
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :class="contentNavigationWrapperClasses"
  >
    <div class="content-navigation">
      <div class="content-navigation__headline-wrapper">
        <prismic-rich-text
          :field="slice.primary.headline"
          class="content-navigation__headline"
        />
      </div>
      <div class="content-navigation__description-wrapper">
        <prismic-rich-text
          :field="slice.primary.description"
          class="content-navigation__description"
        />
      </div>
      <div class="content-navigation__jumplinks">
        <ul>
          <li v-for="jumplink in slice.items">
            <a class="content-navigation__jumplink" :href="`#${jumplink.jump_link_id}`"> 
              {{ jumplink.jump_link_title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.content-navigation {
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
    font-size: 1.8em;
  }

  h2 { 
    font-size: 1.3em;
  }

  &__wrapper {
    height: calc(100vh - 72px);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: $bp-2sm) {
      height: calc(100vh - 87px);
    }

    &--text {
      &-center {
        text-align: center;
      }

      &-right {
        text-align: right;
      }
    }
  }

  &__headline {
    font-family: var(--font-primary);
  }

  &__description {
    padding-top: 2rem;
  }

  &__jumplinks {
    padding-top: 2rem;

    li {
      list-style: none;
      padding-top: 1rem;
    }
  }

  &__jumplink {
    font-family: var(--font-primary);
    font-weight: bold;
    font-size: 1.15rem;
    letter-spacing: 1px;
    color: var(--color-primary);
    border-bottom: solid 2px var(--color-secondary);
    padding: 1px 4px;

    &:hover,
    &:focus-visible {
      text-decoration: none;
      color: var(--color-secondary);
    }

    @media (min-width: $bp-sm) {
      font-size: 1.5rem;
    }

    @media (min-width: $bp-xl) {
      font-size: 1.75rem;
    }
  }
}
</style>