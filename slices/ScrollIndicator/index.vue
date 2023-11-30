<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.ScrollIndicatorSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const instructionIconName = computed(() => {
  switch (props.slice.primary.scroll_indicator_type) {
    case 'Chevron':
      return 'cil:chevron-double-down';
    default:
      return '';
  }
});

const instructionIconAnimation = computed(() => {
  return props.slice.primary.scroll_indicator_animation.toLowerCase();
});

const instructionIconWrapperClasses = computed(() => ({
  'scroll-indicator__instruction-icon-wrapper': true,
  'bounce': instructionIconAnimation.value === 'bounce',
}));
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="scroll-indicator"
  >
    <div class="scroll-indicator__image-text">
      <div class="scroll-indicator__image-wrapper">
        <prismic-image :field="slice.primary.image" class="scroll-indicator__image"/>
      </div>
      <div class="scroll-indicator__text-wrapper">
        <PrismicRichText :field="slice.primary.text" class="scroll-indicator__text"/>
      </div>
    </div>
    <div class="scroll-indicator__instruction">
      <div class="scroll-indicator__instruction-text">
        Scroll to Learn More
      </div>
      <div :class="instructionIconWrapperClasses">
        <Icon 
        :name="instructionIconName"
        class="scroll-indicator__instruction-icon"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.scroll-indicator {
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font-secondary);

  &__image-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__image {

    width: 100%;
    height: 100%;
    border-radius: 50%;

    &-wrapper {
      width: 12rem;
      height: 12rem;

      @media (min-width: $bp-lg) {
        width: 13rem;
        height: 13rem;
      }
    }
  }

  &__text {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    line-height: 2.5rem;


    @media (min-width: $bp-sm) {
      font-size: 1.5rem;
    }

    &-wrapper {
      padding-top: 1.5rem;

      @media (min-width: $bp-sm) {
        padding-top: 2rem;
      }

      &::after {
        content: '';
        display: block;
        width: 6.25rem;
        height: 0.188rem;
        background-color: var(--color-secondary);
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;

        @media (min-width: $bp-sm) {
          width: 10rem;
        }
      }
    }
  }

  &__instruction {
    padding-top: 2.5rem;

    @media (min-width: $bp-sm) {
      padding-top: 3rem;
    }

    &-text {
      font-size: 1rem;

      @media (min-width: $bp-sm) {
        font-size: 1.25rem;
      }
    }

    &-icon {
      color: var(--color-secondary);
      width: 3rem;
      height: 3rem;

      &-wrapper {
        display: flex;
        justify-content: center;
        padding-top: 0.5rem;

        @media (min-width: $bp-sm) {
          padding-top: 1rem;
        }

        &.bounce {
          animation: bounce 0.75s linear 0s alternate infinite;
        }
      }

      @keyframes bounce {
        from {
          transform: translateY(0);
        }

        to {
          transform: translateY(15px);
        }
      }
    }
  }
}
</style>