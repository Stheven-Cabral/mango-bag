<script setup lang="ts">
interface HeaderProps {
  pageType: string | undefined;
};

const props = defineProps<HeaderProps>();

const atLeadCapturePage = ref(false);
const atAboutMePage = ref(false);
const atPortfolioPage = ref(false);
const atBlogPage = ref(false);
const showNavigationList = ref(false);
const headerNavListExpandedOnMobile = ref(false);
const headerNavListClasses = computed(() => ({
  'header__navigation-list': true,
  'is-expanded': headerNavListExpandedOnMobile.value,
}));

const handleOpenButtonClick = () => {
  showNavigationList.value = true;
  headerNavListExpandedOnMobile.value = true;
};

const handleCloseButtonClick = () => {
  showNavigationList.value = false;
  headerNavListExpandedOnMobile.value = false;
};

const setActiveHeaderLink = () => {
  switch (props.pageType) {
    case 'lead_capture_page':
      atLeadCapturePage.value = true;
      break;
    case 'about_me_page':
      atAboutMePage.value = true;
      break;
    case 'portfolio_page':
      atPortfolioPage.value = true;
      break;
    case 'blog_page':
      atBlogPage.value = true;
      break;
    default:
      break;
  };
};

onMounted(() => {
  setActiveHeaderLink();
});
</script>

<template>
  <div class="header">
    <div class="header__navigation">
      <div class="header__navigation-controls">
        <button 
          v-if="!showNavigationList" 
          class="header__navigation-open-button" 
          @click="handleOpenButtonClick"
        >
          <Icon 
            name="humbleicons:bars" 
            size="3em" 
            class="header__navigation-open-icon"
          />
        </button>
        <button 
          v-if="showNavigationList" 
          class="header__navigation-close-button" 
          @click="handleCloseButtonClick"
        >
          <Icon 
            name="ci:close-big" 
            size="3em" 
            class="header__navigation-close-icon"
          />
        </button>
      </div>
      <ul :class="headerNavListClasses">
        <li 
          :class="{
            'header__navigation-list-item': true,
            'header__navigation-list-item--lead-capture-page': true, 
            active: atLeadCapturePage
          }"
        >
          <NuxtLink to="/" class="header__navigation-list-link">Home</NuxtLink>
        </li>
        <li class="header__navigation-list-item header__navigation-list-item--about-me-page">
          <NuxtLink
            to="/about-me" 
            :class="{
              'header__navigation-list-link': true, 
              active: atAboutMePage
            }"
            >
            About Me
          </NuxtLink>
        </li>
        <li class="header__navigation-list-item header__navigation-list-item--portfolio-page">
          <NuxtLink 
            to="/portfolio" 
            :class="{'header__navigation-list-link': true, active: atPortfolioPage}"
          >
          Portfolio
          </NuxtLink>
        </li>
        <li class="header__navigation-list-item header__navigation-list-item--blog-page">
          <NuxtLink 
            to="/blog" 
            :class="{'header__navigation-list-link': true, active: atBlogPage}"
          >
          Blog
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: var(--color-white);
  min-height: 5rem;

  @media (min-width: $bp-2sm) {
    min-height: 87px;
  }

  &__navigation {
    &-controls {
      @media (min-width: $bp-2sm) {
        display: none;
      }

      button {
        background-color: var(--color-white);
      }
    }

    &-open-button,
    &-close-button {
      color: var(--color-primary);
      border-style: none;
      padding: 1rem;

      &:hover,
      &:focus {
        color: var(--color-secondary);
      }
    }

    &-list {
      display: none;

      @media (min-width: $bp-2sm) {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      &-item {
        list-style: none;
        transition: all 0.1s ease-in-out;
        font-size: 2rem;
        font-family: var(--font-secondary);
        padding: 1.5rem 0;
        text-align: center;
        
        @media (min-width: $bp-2sm) {
          padding: 2rem 0;
          margin: 0 2rem;
          border-width: 0.2rem;
          font-size: 1.25rem;
        }

        a {
          color: var(--color-primary);
          border-bottom: 0.2rem solid transparent;

          &:hover,
          &:focus {
            color: var(--color-secondary);
          }

          @media (min-width: $bp-2sm) {
            padding-bottom: 0.25rem;

            &:hover,
            &:focus {
              border-bottom: 0.2rem solid var(--color-secondary);
            }
          }
        }

        &--lead-capture-page {
          display: list-item;

          &.active {
            display: none;
          }
        }
      }

      &-link {
        &.active {
          color: var(--color-secondary);
          border-bottom: 0.2rem solid var(--color-secondary);
        }
      }

      &.is-expanded {
        display: block;
        height: 100vh;
      }
    }
  }
}
</style>