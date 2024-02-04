<script setup lang="ts">
const props = defineProps({
  skills: {
    type: Array,
    required: true,
  },
});

const skillsList = computed<Array<any>>(() => {
  return props.skills;
});
</script>

<template>
  <section class="portfolio-card-skills">
    <ul class="portfolio-card-skills__list">
      <li v-for="skill in skillsList" class="portfolio-card-skills__list-item">
        {{ skill.text }}
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.portfolio-card-skills {
  font-size: 14px;
  font-weight: bold;
  padding-top: 0.25rem;
  
  &__list {
    &-item {
      display: inline-block;
      background-color: var(--color-secondary);
      border-radius: 0.5rem;
      padding: 0.25rem 1rem;
      margin-top: 0.5rem;
      margin-right: 0.5rem;
      color: var(--color-white);
    }
  }
}
</style>
