<template>
  <a class="flex flex-col justify-between px-3 py-4 space-y-2 transition-colors bg-white border border-gray-200 border-solid w-72 space-nav-button rounded-xl hover:bg-gray-100">
    <div class="flex flex-row space-x-3">
      <t-tag :variant="{
        statusActive: isCheckedIn,
        statusInActive: isNotCheckedIn
      }">
        <font-awesome-icon :icon="['far', 'check-circle']" class="mr-1" />Checked In
      </t-tag>
      <t-tag :variant="{
        statusActive: isRoomed,
        statusInActive: isNotRoomed
      }" v-if="show"
      >
        <font-awesome-icon :icon="['far', 'sign-in']" class="mr-1" />Roomed
      </t-tag>
    </div>
    <div class="flex flex-row items-center justify-start text-sm text-gray-800">
      <span class="mr-2 font-semibold"> {{time}}</span>
      <span class="inline-block"> {{patientName}} </span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'SpaceNavigationButton',
  props: {
    time: String,
    patientName: String,
    isRoomed: Boolean,
    isNotRoomed: Boolean,
    isCheckedIn: Boolean,
    isNotCheckedIn: Boolean
  },
  data () {
    return {
      show: this.isCheckedIn === true
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>