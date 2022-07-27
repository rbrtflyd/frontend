<template >
  <div>
    <div class="bottom-0 w-full p-6 bg-white space-nav rounded-2xl drop-shadow">
      <div class="flex flex-row gap-x-4">
        <slot name="spaceNavigationButtons"></slot>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: { 

    },
  name: 'SpaceNavigation',
  props: {

  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
</style>