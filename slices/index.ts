// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  content_navigation: defineAsyncComponent(
    () => import("./ContentNavigation/index.vue"),
  ),
  custom_spacing: defineAsyncComponent(
    () => import("./CustomSpacing/index.vue"),
  ),
  list: defineAsyncComponent(() => import("./List/index.vue")),
  portfolio_cards: defineAsyncComponent(
    () => import("./PortfolioCards/index.vue"),
  ),
  scroll_indicator: defineAsyncComponent(
    () => import("./ScrollIndicator/index.vue"),
  ),
  section_title: defineAsyncComponent(() => import("./SectionTitle/index.vue")),
  text_block: defineAsyncComponent(() => import("./TextBlock/index.vue")),
});
