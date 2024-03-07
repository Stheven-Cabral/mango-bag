<script setup lang="ts">
import { gsap } from "gsap";

const popupCookie: Ref<HTMLElement | undefined> = ref();

useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      crossorigin: ''
    }
  ]
})

const setCookieAnimation = () => {
  const t1 = gsap.timeline({ defaults: { duration:0.75, ease: "power1.out", }});
  
  t1.fromTo('.popup-cookie__container', {scale: 0}, {scale: 1, ease: "elastic.out(1,0.3)", duration: 1.5});
  t1.fromTo('.popup-cookie__svg', {opacity: 0, x:-50, rotation: '-45deg'}, {opacity: 1, x: 0, rotation: '0deg'}, '<50%');
  t1.fromTo('.popup-cookie__content', {x: 30, opacity: 0}, {x: 0, opacity: 1}, '<');
  t1.fromTo('.popup-cookie__svg', {y: 0, rotation: '0deg'}, {y:-20, rotation:'-20deg', yoyo: true, repeat: -1});
  t1.fromTo('#cookie-crumbs', {y: 0, }, {y:-20, yoyo: true, repeat: -1}, '<');
};

const onClickHandler = () => {
  if (popupCookie.value) {
    gsap.to(popupCookie.value, {opacity: 0, y: 100, duration: 0.75, ease: 'power1.out'});
  }
};

onMounted(() => {
  setCookieAnimation();
});
</script>

<template>
  <div class="popup-cookie-page">
    <Header page-type="popup-cookie-page"/>
    <div class="popup-cookie__container">
      <div ref="popupCookie" class="popup-cookie">
        <SvgCookie />
        <div class="popup-cookie__content">
          <h2 class="popup-cookie__title">Cookie Policy</h2>
          <p class="popup-cookie__subtitle">We use analytical cookies to make your experience better on this website.</p>
          <button class="popup-cookie__button" @click="onClickHandler">Got It</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.popup-cookie {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(260deg, #9b6c50 0%, #4f2626 100%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 20rem;
  height: 10rem;
  border-radius: 1.2rem;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;

  &__container {
    height: calc(100vh - 72px);
    margin-top: 72px;

    @media (min-width: $bp-2sm) {
      height: calc(100vh - 87px);
      margin-top: 87px;
    }
  }

  &__svg {
    transform: scale(0.7);
    padding-right: 1rem;
    overflow: visible;

    g {
      overflow: visible;
    }
  }

  &__content {
    width: 65%;
  }

  &__title {
    font-size: 1rem;
    font-weight: 400;
  }

  &__subtitle {
    padding: 0.7rem 0;
    line-height: normal;
    font-weight: 500;
    font-size: 0.7rem;
  }

  &__button {
    border-style: none;
    padding: 0.5rem 1rem;
    color: #4f2626;
    font-family: "Poppins", sans-serif;
    font-size: 0.6rem;
    font-weight: 500;
    border-radius: 0.3rem;
  }
}
</style>