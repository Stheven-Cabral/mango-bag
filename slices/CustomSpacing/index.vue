<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.CustomSpacingSlice>()
);

const customSpaceValue = computed(() => {
  return props.slice.primary.custom_space_value;
});

const mobileOnlyCustomSpace = computed(() => {
  return props.slice.primary.mobile_only;
});

const customSpaceComponentClass = computed(() => {
  return {
    'custom-spacing': true,
    'custom-spacing--mobile-only': mobileOnlyCustomSpace.value === true,
  }
});

const customSpacingStyles = computed(() => {
  return {
    height: `${customSpaceValue.value}px`,
  }
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :class="customSpaceComponentClass"
    :style="customSpacingStyles"
  />
</template>

<style lang="scss">
.custom-spacing {
  display: block;
  
  @media (min-width: $bp-sm) {
    &--mobile-only {
      display: none;
    }
  }
}
</style>
