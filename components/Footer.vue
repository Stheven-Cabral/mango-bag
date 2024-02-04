<template>
  <div class="footer__wrapper">
   <div class="footer">
    <div class="footer__contact-me">
      <div class="footer__contact-me-header">
        <p>Let's work on something together?</p>
      </div>
      <div class="footer__contact-me-call-to-action">
        <a href="mailto:stheven.cabral@gmail.com">Contact Me</a>
      </div>
    </div>
    <div class="footer__social-media">
      <div class="footer__social-media-header">
        <p>You can find me on social media</p>
      </div>
      <div class="footer__social-media-links">
        <a
          class="footer__social-media-link"
          href="https://github.com/Stheven-Cabral"
          target="_blank"
        >
          <Icon
            name="mdi:github"
            size="2rem"
            class="footer__social-media-links-icon"
          />
        </a>
        <a
          class="footer__social-media-link"
          href="https://www.linkedin.com/in/sthevencabral"
          target="_blank"
        >
          <Icon
            name="mdi:linkedin"
            size="2rem"
            class="footer__social-media-links-icon"
          />
        </a>
        <a
          class="footer__social-media-link"
          href="https://www.instagram.com/scab.css/"
          target="_blank"
        >
          <Icon
            name="ri:instagram-fill"
            size="2rem"
            class="footer__social-media-links-icon"
          />
        </a>
      </div>
    </div>
    <div class="footer__copyright">
      <div class="footer__copyright-text">
        <p>Powered by yours truly Stheven Cabral using Nuxt 3</p>
      </div>
    </div>
   </div>  
  </div>
</template>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 51.25rem;
  margin: 0 auto;
  position: relative;
  height: 21rem;
  padding: 0 1rem;
  background-color: var(--color-primary-darker);
  color: var(--color-white);

  @media (min-width: $bp-md) {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    align-items: start;
    padding: 4rem 1rem 1rem;
    height: 13rem;
  }

  &__wrapper {
    background-color: var(--color-primary-darker);
  }

  &__contact-me {
    padding-top: 2rem;
    font-family: var(--font-primary);
    font-size: 1.5rem;
    letter-spacing: 2px;

    @media (min-width: $bp-2sm) {
      font-size: 1.75rem;
    }

    @media (min-width: $bp-md) {
      padding-top: 0;
    }

    &-call-to-action {
      padding-top: 1.5rem;

      a {
        font-family: var(--font-primary);
        font-size: 1.25rem;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        border-color: transparent;
        background-color: var(--color-secondary-darker);
        color: var(--color-white);
        letter-spacing: 2px;

        &:hover,
        &:focus-visible {
          background-color: var(--color-secondary);
        }
      }
    }
  }

  &__social-media {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    font-family: var(--font-primary);
    font-size: 1.15rem;
    letter-spacing: 2px;

    @media (min-width: $bp-2sm) {
      font-size: 1.25rem;
    }

    @media (min-width: $bp-md) {
      padding-top: 0;
    }

    &-links {
      padding-top: 0.75rem;
    }

    &-link {
      padding: 0 0.5rem;

      svg {
        color: var(--color-white);

        &:hover,
        &:focus-visible {
          color: var(--color-secondary);
        }
      }
    }
  }

  &__copyright {
    position: absolute;
    bottom: 1rem;
    font-family: var(--font-secondary);
    font-size: 1rem;

    @media (min-width: $bp-md) {
      position: relative;
      bottom: 0;
      grid-column-start: 1;
      grid-column-end: 3;
      align-self: end;
    }
  }
}
</style>