<template>
  <div class="flex flex-col">
    <global-navigation />
    <div class="flex flex-row flex-grow items-stretch">
      <space-sidebar
        class="sidebar"
        :title="spaceTitle"
        :meta="spaceMeta"
        :actions="hasSidebarActions"
      >
        <template #sidebarList>
          <slot name="spaceSidebarList" />
        </template>
        <template #sidebarActions>
          <slot name="spaceSidebarActions" />
        </template>
      </space-sidebar>
      <div class="z-10 flex flex-col justify-between w-full pl-9 h-full">
        <transition>
          <main
            class="flex flex-row gap-4 page-content overflow-scroll pt-9 h-full w-full"
          >
            <slot name="page-content" />
          </main>
        </transition>
        <div class="pb-9 mr-9 justify-self-end">
          <space-navigation>
            <template #spaceNavigationButtons>
              <slot name="spaceNav" />
            </template>
          </space-navigation>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>

</static-query>

<script>
import GlobalNavigation from "../components/Navigation/GlobalNavigation.vue";
import SpaceSidebar from "../components/Structural/SpaceSidebar.vue";
import SpaceNavigation from "../components/Navigation/SpaceNavigation.vue";

export default {
  components: {
    GlobalNavigation,
    SpaceSidebar,
    SpaceNavigation,
  },
  props: [
    "sidebar",
    "page-content",
    "spaceNav",
    "spaceTitle",
    "spaceMeta",
    "hasSidebarActions",
  ],
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
