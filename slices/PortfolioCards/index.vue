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
        <div v-for="example in slice.items" :class="`portfolio-cards__example ${example.custom_class}`">
          <div class="portfolio-cards__example-card">
            <div class="portfolio-cards__example-image">
              <prismic-image :field="example.work_example_image" />
            </div>
            <div class="portfolio-cards__example-title">{{ example.work_example_title }}</div>
            <div class="portfolio-cards__example-links">
              <a 
                class="portfolio-cards__example-page-link"
                :href="`${example.work_example_link}`"
              >
                <div class="portfolio-cards__example-page-link-text">See It</div>
                <Icon
                  name="eva:external-link-outline"
                  size="2rem"
                  class="portfolio-cards__example-page-link-icon"
                />
              </a>
              <a
                class="portfolio-cards__example-source-link"
                :href="`${example.work_example_code_link}`"
              >
                <span class="portfolio-cards__example-source-link-text">View Source</span>
                <Icon
                  name="ic:round-source"
                  size="2rem"
                  class="portfolio-cards__example-source-link-icon"
                />
              </a>
            </div>
          </div>
          <div class="portfolio-cards__example-description">
            {{ example.work_example_description }}
          </div>
          <portfolio-card-skills :skills="example.work_example_skills" />
        </div>
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

  &__example {
    padding-top: 1.85rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    max-width: 375px;

    &.no-display {
      display: none;
    }

    &:first-child {
      padding-top: 0;

      @media (min-width: $bp-sm) {
        padding-top: 1.85rem;
      }
    }

    &-card {
      position: relative;
      aspect-ratio: 16/9;
      width: 100%;
    }

    &-image {
      height: 100%;
      width: 100%;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      &::after {
        content: '';
        height: auto;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(160deg, var(--color-primary), transparent 100%);
        transition: background-color 0.5s ease;
      }
    }

    &-title {
      position: absolute;
      top: 1rem;
      left: 0.75rem;
      padding-right: 2px;
      font-family: var(--font-primary);
      font-weight: bold;
      color: var(--color-white);
      letter-spacing: 2px;
    }

    &-links {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 1rem;
      left: 0.75rem;
    }

    &-page-link,
    &-source-link {
      display: flex;
      align-items: center;
      background-color: var(--color-white);
      border-radius: 0.2rem;
      width: 9.5rem;
      transition: width 0.5s ease;
      color: var(--color-primary);

      &-text {
        display: flex;
        justify-content: center;
        width: 7.5rem;
        white-space: nowrap;
        overflow: hidden;
        transition: width 0.5s ease;
        font-family: var(--font-primary);
        font-size: 1.25rem;
      }

      &:hover,
      &:focus-visible {
        color: var(--color-secondary);
      }
    }

    &-page-link {
      &:nth-of-type(1) {
        margin-bottom: 0.2rem;
      }
    }

    &-description {
      font-size: 18px;
      padding-top: 0.75rem;
      line-height: 1.5rem;
    }

    @media (min-width: $bp-2sm) {
      .portfolio-cards__example-page-link,
      .portfolio-cards__example-source-link {
        width: 2rem;

        &-text {
          width: 0;
        }
      }

      &:hover,
      &:focus-visible {
        .portfolio-cards__example-page-link,
        .portfolio-cards__example-source-link {
          width: 9.5rem;

          &-text {
            width: 7.5rem;
          }
        }

        .portfolio-cards__example-image::after {
          background-color: rgba(0, 0, 51, 0.5);
        }
      }
    }

    @media (min-width: $bp-md) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
}
</style>
