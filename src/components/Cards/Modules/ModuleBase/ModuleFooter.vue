<template>
  <div
    class="flex flex-row w-full px-4 py-2 border-t border-slate-200 justify-between bg-white-10"
  >
    <div class="flex flex-row gap-x-3">
      <t-button :to="primaryButtonPath" variant="primary">{{
        primaryButtonText
      }}</t-button>
      <t-button
        v-if="secondaryButtonPath && secondaryButtonText"
        :to="secondaryButtonPath"
        variant="secondary"
        >{{ secondaryButtonText }}</t-button
      >
    </div>
    <div v-if="tertiaryButtonPath && tertiaryButtonText">
      <t-button :to="tertiaryButtonPath">{{ tertiaryButtonText }}</t-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModuleFooter",
  components: {},
  props: {
    primaryButtonPath: String,
    primaryButtonText: String,
    secondaryButtonPath: String,
    secondaryButtonText: String,
    tertiaryButtonPath: String,
    tertiaryButtonText: String,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
