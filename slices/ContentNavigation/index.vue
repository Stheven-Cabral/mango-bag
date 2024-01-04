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
  &__wrapper {
    background-color: var(--color-secondary);
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
  } 
}
</style>