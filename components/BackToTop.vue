<script setup lang="ts">
const backToTop = ref();

const scrollEventHandler = () => {
  if (window.scrollY > 1000) {
    backToTop.value.style.display = 'block';
  } else {
    backToTop.value.style.display = 'none';
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollEventHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollEventHandler);
});

</script>

<template>
  <section ref="backToTop" class="back-to-top">
    <a href="#" class="back-to-top__button">
      <Icon
        name="fluent:chevron-up-12-filled"
        size="2.5rem"
        class="back-to-top__button-icon"
      />
    </a>
  </section>
</template>

<style lang="scss">
.back-to-top {
  display: none;
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  z-index: 10;

  &__button {
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    border-radius: 1.5rem;
    transition: background-color 0.5s ease;

    &-icon {
      color: var(--color-white);
    }

    &:hover,
    &:focus-visible {
      background-color: var(--color-secondary); 
    }
  }
}
</style>