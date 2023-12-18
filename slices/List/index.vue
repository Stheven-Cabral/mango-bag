<script setup lang="ts">
import { Content } from "@prismicio/client";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const listWrapper = ref();
let ctx = ref();

const props = defineProps(
  getSliceComponentProps<Content.ListSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const hasListOneColumn = computed(() => {
  if (
    props.slice.variation === 'default' ||
    props.slice.variation === 'listTwoColumn' ||
    props.slice.variation === 'listThreeColumn'
  ) {
    return props.slice.primary.list_items_1.length > 0;
  }

   return false;
});

const hasListTwoColumn = computed(() => {
  if (
    props.slice.variation === 'listTwoColumn' ||
    props.slice.variation === 'listThreeColumn'
  ) {
    return props.slice.primary.list_items_2.length > 0;
  }

   return false;
});

const hasListThreeColumn = computed(() => {
  if (
    props.slice.variation === 'listThreeColumn'
  ) {
    return props.slice.primary.list_items_3.length > 0;
  }

   return false;
});

const titleAlignment = computed(() => {
  return props.slice.primary.list_title_alignment;
});
const descriptionAlignment = computed(() => {
  return props.slice.primary.list_description_alignment;
});
const listAlignment = computed(() => {
  return props.slice.primary.list_items_alignment;
});
const scrollAnimation = computed(() => {
  return props.slice.primary.scroll_animation;
});

const listComponentClass = computed(() => {
  return {
    'list': true,
    'list--title-left': titleAlignment.value === 'Left',
    'list--title-center': titleAlignment.value === 'Center',
    'list--title-right': titleAlignment.value === 'Right',
    'list--description-left': descriptionAlignment.value === 'Left',
    'list--description-center': descriptionAlignment.value === 'Center',
    'list--description-right': descriptionAlignment.value === 'Right',
    'list--lists-left': listAlignment.value === 'Left',
    'list--lists-center': listAlignment.value === 'Center',
    'list--lists-right': listAlignment.value === 'Right',
    'list--fade-in-bottom': scrollAnimation.value === 'Fade In Bottom',
    'list--fade-in-top': scrollAnimation.value === 'Fade In Top',
  }
});

const setupListAnimation = () => {
  ctx.value = gsap.context((self) => {
    const fadeInBottomLists = self.selector?.('.list--fade-in-bottom');
    const fadeInTopLists = self.selector?.('.list--fade-in-top');

    fadeInBottomLists.forEach((listSlice: any) => {
      gsap.from(listSlice as gsap.TweenTarget, {
        opacity: 0,
        y: 75,
        duration: 1,
        scrollTrigger: {
          trigger: listSlice as gsap.DOMTarget,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: false,
        },
      });
    });

    fadeInTopLists.forEach((listSlice: any) => {
      gsap.from(listSlice as gsap.TweenTarget, {
        opacity: 0,
        y: -75,
        duration: 1,
        scrollTrigger: {
          trigger: listSlice as gsap.DOMTarget,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: false,
        },
      });
    });
  }, listWrapper.value);
};

onMounted(() => {
  setupListAnimation();
});

onUnmounted(() => {
  ctx.value.revert();
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="list__wrapper"
    ref="listWrapper"
  >
    <div :class="listComponentClass">
      <div class="list__headline-wrapper">
        <prismic-rich-text
          :field="slice.primary.list_title"
          class="list__headline"
        />
      </div>
      <div class="list__description-wrapper">
        <prismic-rich-text
          :field="slice.primary.list_description"
          class="list__description"
        />
      </div>
      <div class="list__columns">
        <div v-if="slice.variation ==='default' ||
          slice.variation ==='listTwoColumn'  ||
          slice.variation ==='listThreeColumn'"
          class="list__column list__column-one">
          <prismic-rich-text
            v-if="hasListOneColumn"
            :field="slice.primary.list_items_1"
          />
        </div>
        <div v-if="slice.variation ==='listTwoColumn'  ||
          slice.variation ==='listThreeColumn'"
          class="list__column list__column-two">
          <prismic-rich-text
            v-if="hasListTwoColumn"
            :field="slice.primary.list_items_2"
          />
        </div>
        <div v-if="slice.variation ==='listThreeColumn'"
          class="list__column list__column-three">
          <prismic-rich-text
            v-if="hasListThreeColumn"
            :field="slice.primary.list_items_3"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.list {
  padding: 1rem 0 0;
  font-family: var(--font-secondary);
  font-size: 1.25rem;
  color: var(--color-primary);
  margin: 0 auto;

  @media (min-width: $bp-sm) {
    font-size: 1.5rem;
  }

  h1, h2, h3 {
    font-weight: normal;
  }

  h1 { 
    font-size: 1.75em;
  }

  h2 { 
    font-size: 1.25em;
  }

  &__headline {
    font-family: var(--font-primary);
    padding-top: 1.5rem;

    h1, h2, h3 {
      &::after {
        content: '';
        display: block;
        width: 6.25rem;
        height: 0.188rem;
        background-color: var(--color-secondary);
        margin-top: 0.9rem;
  
        @media (min-width: $bp-sm) {
          width: 10rem;
        }
      }
    }
  }

  &__description {
    padding-top: 1.5rem;
    line-height: 2.5rem;;
  }

  &__columns {
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    list-style-position: inside;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.25rem;

    .list__column {
      padding-top: 1rem;
      line-height: 1.75rem;
    }

    @media (min-width: $bp-sm) {
      flex-direction: row;
      align-items: start;
      justify-content: center;
      line-height: 1.5rem;

      .list__column {
        max-width: 270px;
        padding-top: 1rem;
        padding-right: 3rem;
        padding-left: 3rem;
        line-height: 2rem;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }
    }

    @media (min-width: $bp-lg) {
      .list__column {
        padding-right: 5rem;
        padding-left: 5rem;
      }
    }

    h1, h2, h3 {
      font-family: var(--font-primary);
      font-weight: normal;
      padding-top: 0.5rem;
      letter-spacing: 1px;
    }

    ul {
      list-style: none;
    }

    ol {
      padding-inline-start: 0;
    }

    ul, ol {
      margin: 1rem 0;
    }

    li {
      padding-top: 0.25rem;
    }
  }

  &--title-center {
    .list {
      &__headline {
        text-align: center;

        h1, h2, h3, h4, h5, h6 {
          &::after {
            margin-left: auto;
            margin-right: auto;
          }
        }
      }
    }
  }

  &--title-right {
    .list {
      &__headline {
        text-align: right;

        h1, h2, h3, h4, h5, h6 {
          &::after {
            margin-left: auto;
          }
        }
      }
    }
  }

  &--description-center {
    .list {
      &__description {
        text-align: center;
      }
    }
  }

  &--description-right {
    .list {
      &__description {
        text-align: right;
      }
    }
  }

  &--lists-center {
    .list {
      &__columns {
        text-align: center;
      }
    }
  }

  &--lists-right {
    .list {
      &__columns {
        text-align: right;
      }
    }
  }
}
</style>
