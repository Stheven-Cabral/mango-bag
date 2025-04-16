<script setup lang="ts">
const props = defineProps({
  portfolioExamples: {
    type: Array,
    required: true,
  },
});

const examplesArray = computed<Array<any>>(() => {
  return props.portfolioExamples;
});
</script>

<template>
  <div
    v-for="example in examplesArray"
    :class="`portfolio-card ${example.custom_class}`"
  >
    <div class="portfolio-card__image-container">
      <div class="portfolio-card__image">
        <prismic-image :field="example.work_example_image" />
      </div>
      <div class="portfolio-card__title">{{ example.work_example_title }}</div>
      <div class="portfolio-card__links">
        <a
          v-if="example.work_example_link.url"
          class="portfolio-card__page-link"
          :href="`${example.work_example_link.url}`"
          target="_blank"
        >
          <div class="portfolio-card__page-link-text">See It</div>
          <Icon
            name="eva:external-link-outline"
            size="2rem"
            class="portfolio-card__page-link-icon"
          />
        </a>
        <a
          v-if="example.work_example_code_link.url"
          class="portfolio-card__source-link"
          :href="`${example.work_example_code_link.url}`"
          target="_blank"
        >
          <span class="portfolio-card__source-link-text">View Source</span>
          <Icon
            name="ic:round-source"
            size="2rem"
            class="portfolio-card__source-link-icon"
          />
        </a>
      </div>
    </div>
    <div class="portfolio-card__description">
      {{ example.work_example_description }}
    </div>
    <portfolio-card-skills :skills="example.work_example_skills" />
  </div>
</template>

<styles lang="scss">
.portfolio-card {
  padding-top: 1.85rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  max-width: 375px;

  @media (min-width: $bp-sm) {
    padding-top: 2rem;
  }

  &.no-display {
    display: none;
  }

  &:first-child {
    padding-top: 0;

    @media (min-width: $bp-sm) {
      padding-top: 1.85rem;
    }
  }

  &:nth-child(2) {
    @media (min-width: $bp-sm) {
      padding-top: 1.85rem;
    }
  }

  &__image-container {
    position: relative;
    aspect-ratio: 16/9;
    width: 100%;
  }

  &__image {
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &::after {
      content: "";
      height: auto;
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: linear-gradient(
        160deg,
        var(--color-primary),
        transparent 100%
      );
      transition: background-color 0.5s ease;
    }
  }

  &__title {
    position: absolute;
    top: 1rem;
    left: 0.75rem;
    padding-right: 2px;
    font-family: var(--font-primary);
    font-weight: bold;
    color: var(--color-white);
    letter-spacing: 1.5px;
  }

  &__links {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 1rem;
    left: 0.75rem;
  }

  &__page-link,
  &__source-link {
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
      font-size: 1.15rem;

      @media (min-width: $bp-sm) {
        font-size: 1.25rem;
      }
    }

    &:hover,
    &:focus-visible {
      color: var(--color-secondary);
    }
  }

  &__page-link {
    &:nth-of-type(1) {
      margin-bottom: 0.2rem;
    }
  }

  &__description {
    font-size: 1rem;
    padding-top: 0.75rem;
    line-height: 1.5rem;

    @media (min-width: $bp-sm) {
      font-size: 1.15rem;
    }

    @media (min-width: $bp-xl) {
      font-size: 1.25rem;
    }
  }

  @media (min-width: $bp-2sm) {
    .portfolio-card__page-link,
    .portfolio-card__source-link {
      width: 2rem;

      &-text {
        width: 0;
      }
    }

    &:hover,
    &:focus-visible {
      .portfolio-card__page-link,
      .portfolio-card__source-link {
        width: 9.5rem;

        &-text {
          width: 7.5rem;
        }
      }

      .portfolio-card__image::after {
        background-color: rgba(0, 0, 51, 0.5);
      }
    }
  }

  @media (min-width: $bp-md) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</styles>
