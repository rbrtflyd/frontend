<template>
  <g-link
    class="p-4 leading-none rounded-2xl bg-white border border-transparent shadow shadow-slate-900/10"
    :exact-active-class="'border border-emerald-200'"
    :active-class="'border border-emerald-200 opactiy-100'"
    :to="path"
  >
    <div class="mb-2">
      <span class="text-base font-medium leading-none">{{ itemHeading }}</span>
    </div>
    <div v-if="item_type != 'message'">
      <div class="flex flex-row items-center space-x-3 leading-none">
        <div class="text-sm font-semibold">
          {{ appointmentTime }}
        </div>
        <div v-if="item_type === 'appointment'" class="flex flex-row space-x-3">
          <div
            class="text-xs"
            :class="[isCheckedIn ? 'text-blue-600' : 'text-slate-400']"
            v-if="status === null || 'Checked In' || 'Roomed'"
          >
            <font-awesome-icon :icon="['far', 'check-circle']" class="mr-0.5" />
            Checked In
          </div>
          <div
            class="text-xs"
            :class="[isRoomed ? 'text-blue-600' : 'text-slate-400']"
            v-if="status === 'Checked In' || 'Roomed'"
          >
            <font-awesome-icon :icon="['far', 'sign-in']" class="mr-1" />Roomed
          </div>
        </div>
        <div v-if="item_type === 'order'" class="flex flex-row space-x-3">
          <div
            class="text-xs"
            :class="[orderStatus ? 'text-blue-600' : 'text-slate-400']"
          >
            <font-awesome-icon :icon="['far', 'check-circle']" class="mr-0.5" />
            {{ status }}
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
    status: String,
  },
  data() {
    return {
      isCheckedIn: this.status === "Checked In" || "Roomed",
      isRoomed: this.status === "Roomed",
      orderStatus: this.status === "Filled",
    };
  },
  computed: {
    checkedIn_class() {},
    active() {},
  },
};
</script>

<style scoped></style>
