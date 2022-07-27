<template>
  <g-link
    class="p-4 leading-none rounded-2xl bg-white border border-transparent shadow shadow-slate-900/10"
    :exact-active-class="'border border-emerald-200'"
    :to="path"
  >
    <div class="mb-2">
      <span class="text-base">{{ itemHeading }}</span>
    </div>
    <div v-if="item_type != 'message'">
      <div class="flex flex-row items-center space-x-3">
        <div class="text-sm font-semibold">
          {{ appointmentTime }}
        </div>
        <div v-if="item_type === 'appointment'" class="flex flex-row space-x-3">
          <div
            class="text-xs"
            :class="[checkedIn_class ? 'text-blue-600' : 'text-slate-400']"
            v-if="appointmentStatus === 'Checked In' || 'Roomed'"
          >
            <font-awesome-icon :icon="['far', 'check-circle']" class="mr-0.5" />
            Checked In
          </div>
          <div
            class="text-xs"
            :class="[checkedIn_class ? 'text-blue-600' : 'text-slate-400']"
            v-if="appointmentStatus === 'Roomed'"
          >
            <font-awesome-icon :icon="['far', 'sign-in']" class="mr-1" />Roomed
          </div>
        </div>
        <div v-if="item_type === 'order'" class="flex flex-row space-x-3">
          <div class="text-xs text-slate-400">
            <font-awesome-icon :icon="['far', 'check-circle']" class="mr-0.5" />
            Filled
          </div>
        </div>
      </div>

      <div class="" v-if="item_type === 'order'"></div>
    </div>
  </g-link>
</template>

<script>
export default {
  name: "ItemButtonCard",
  props: {
    path: String,
    itemHeading: String,
    item_type: String,
    appointmentTime: String,
    appointmentStatus: String,
  },
  data() {
    return {
      show: this.isCheckedIn === true,
      isCheckedIn: this.appointmentStatus === "Checked In",
      isRoomed: this.appointmentStatus === "Roomed",
    };
  },
  computed: {
    checkedIn_class() {
      return {
        checkedIn_active: this.isCheckedIn,
        roomed_active: this.isRoomed,
      };
    },
    active() {},
  },
};
</script>

<style scoped></style>
