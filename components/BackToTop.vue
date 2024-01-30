<template>
  <section class="back-to-top">
    <a href="#" class="back-to-top__button">
      <Icon
            name="fluent:chevron-up-12-filled"
            size="2rem"
            class="back-to-top__button-icon"
          />
    </a>
  </section>
</template>

<style lang="scss">
.back-to-top {
  position: absolute;
  height: 2rem;
  width: 2rem;

  &__button {
    
    background-color: var(--color-white);
  }
}
</style>