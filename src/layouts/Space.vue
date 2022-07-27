<template>
  <div>
    <global-navigation/>
    <div class="flex flex-col">
      <space-sidebar class="sidebar" :title="spaceTitle" :meta="spaceMeta" :actions="hasSidebarActions">
          <template #sidebarList >
            <slot name="spaceSidebarList"/>
          </template>
          <template #sidebarActions>
            <slot name="spaceSidebarActions"/>
          </template>
      </space-sidebar>
      <div class="z-10 flex flex-col justify-between w-full pl-96">
        <div class="overflow-scroll pt-9">
          <div class="flex flex-row gap-4 page-content">
            <slot name="page-content"/>
          </div>
        </div>
        <div class="pb-9 mr-9">
          <space-navigation>
            <template #spaceNavigationButtons>
              <slot name="spaceNav"/>
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
import GlobalNavigation from '../components/Navigation/GlobalNavigation.vue'
import SpaceSidebar from '../components/Structural/SpaceSidebar.vue'
import SpaceNavigation from '../components/Navigation/SpaceNavigation.vue'

export default {
  components: {
    GlobalNavigation,
    SpaceSidebar,
    SpaceNavigation
},
  props: [
    'sidebar',
    'page-content',
    'spaceNav',
    'spaceTitle',
    'spaceMeta',
    'hasSidebarActions'
  ]
}
</script>

<style>

</style>
