<script setup lang="ts">
import { Content } from "@prismicio/client";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const textBlockWrapper = ref();
let ctx = ref();

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.TextBlockSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const textBlockWrapperClasses = computed(() => {
  return {
    'text-block__wrapper': true,
    'text-block__wrapper--full-bleed': props.slice.primary.set_full_bleed === true,
  }
});

const textAlignment = computed(() => {
  return props.slice.primary.text_block_alignment.toLowerCase();
});

const textBlockClasses = computed(() => {
  return {
    'text-block': true,
    [`text-block--${textAlignment.value}-aligned`]: true,
    'text-block--fade-in-bottom': props.slice.primary.scroll_animation === 'Fade In Bottom',
    'text-block--fade-in-top': props.slice.primary.scroll_animation === 'Fade In Top',
  }
});

const setupTextBlockAnimation = () => {
  ctx.value = gsap.context((self) => {
    const fadeInBottomTextBlocks = self.selector?.('.text-block--fade-in-bottom');
    const fadeInTopTextBlocks = self.selector?.('.text-block--fade-in-top');

    fadeInBottomTextBlocks.forEach((textBlock: any) => {
      gsap.from(textBlock as gsap.TweenTarget, {
        opacity: 0,
        y: 75,
        duration: 1,
        scrollTrigger: {
          trigger: textBlock as gsap.DOMTarget,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: false,
        },
      });
    });

    fadeInTopTextBlocks.forEach((textBlock: any) => {
      gsap.from(textBlock as gsap.TweenTarget, {
        opacity: 0,
        y: -75,
        duration: 1,
        scrollTrigger: {
          trigger: textBlock as gsap.DOMTarget,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: false,
        },
      });
    });
  }, textBlockWrapper.value);
};

onMounted(() => {
  setupTextBlockAnimation();
});

onUnmounted(() => {
  ctx.value.revert();
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :class="textBlockWrapperClasses"
    ref="textBlockWrapper"
  >
    <div :class="textBlockClasses">
      <prismic-rich-text
        :field="slice.primary.headline"
        class="text-block__headline"
      />
      <prismic-rich-text
        :field="slice.primary.text_block_copy"
        class="text-block__copy"
      />
    </div>
  </section>
</template>

<style lang="scss">
.text-block {
  opacity: 1;
  font-family: var(--font-secondary);
  font-size: 1rem;
  color: var(--color-primary);

  @media (min-width: $bp-sm) {
    font-size: 1.25rem;
  }

  @media (min-width: $bp-xl) {
    font-size: 1.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-primary);
    font-weight: bold;
    padding-top: 1.5rem;

    &::after {
      content: '';
      display: block;
      width: 6.25rem;
      height: 0.188rem;
      background-color: var(--color-secondary);
      margin-top: 1rem;

      @media (min-width: $bp-sm) {
        width: 10rem;
      }
    }

    & + p {
      padding-top: 1.5rem;
    }
  }

  h1 { 
    font-size: 1.75em;
  }

  h2 { 
    font-size: 1.25em;
  }

  &__copy {
    padding-top: 1.5rem;
  }

  span.special {
    color: var(--color-secondary);
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &--full-bleed {
      padding: 0;
      height: calc(100vh - 72px);

      @media (min-width: $bp-2sm) {
        height: calc(100vh - 87px);
      }

      h1, h2, h3, h4, h5, h6 {
        &:first-child {
          padding-top: 0;
        }
      }
    }
  }

  &--left-aligned {
    text-align: left;
  }

  &--center-aligned {
    text-align: center;

    h1, h2, h3, h4, h5, h6 {
      &::after {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  &--right-aligned {
    text-align: right;

    h1, h2, h3, h4, h5, h6 {
      &::after {
        margin-left: auto;
      }
    }
  }
}
</style>
