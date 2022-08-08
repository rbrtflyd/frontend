<template>
  <div
    class="flex flex-row w-full px-4 py-2 border-t border-slate-200 justify-between bg-white-10"
  >
    <div class="flex flex-row gap-x-3">
      <t-button :to="primaryButton.path" variant="primaryGreen">{{
        primaryButton.text
      }}</t-button>
      <t-button
        v-if="secondaryButton.path && secondaryButton.text"
        :to="secondaryButton.path"
        variant="secondary"
        >{{ secondaryButton.text }}</t-button
      >
    </div>
    <div v-if="tertiaryButton.path && tertiaryButton.text">
      <t-button :to="tertiaryButton.path">{{ tertiaryButton.text }}</t-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModuleFooter",
  components: {},
  props: {
    primaryButton: {
      path: String,
      text: String,
    },
    secondaryButton: {
      path: String,
      text: String,
    },
    tertiaryButton: {
      path: String,
      text: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
