<template>
  <div
    class="z-20 flex flex-col justify-between px-6 w-sidebar bg-white/30 pt-9 backdrop-blur-xl h-full"
  >
    <div class="flex flex-col grow">
      <div class="mb-4">
        <h1 class="text-xl text-slate-700">{{ title }}</h1>
        <h3 class="text-sm text-slate-600">{{ meta }}</h3>
      </div>
      <div class="flex flex-col space-y-4">
        <slot name="sidebarList" />
      </div>
    </div>
    <div v-if="actions" class="p-4">
      <slot name="sidebarActions" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    meta: String,
    actions: Boolean,
  },
};
</script>

<style></style>
