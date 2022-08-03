<template>
  <div
    class="bg-white w-moduleCard flex flex-col rounded-xl shadow shadow-slate-900/10 h-144"
  >
    <module-header
      :headerTitle="moduleTitle"
      :headerSubTitle="moduleSubTitle"
    />
    <div class="px-4 py-4 flex-grow overflow-scroll">
      <slot name="moduleContent" />
    </div>
    <module-footer
      :primaryButtonPath="footerButton1"
      :primaryButtonText="footerButton1_text"
      :secondaryButtonPath="footerButton2"
      :tertiaryButtonPath="footerButton3"
    />
  </div>
</template>

<script>
import ModuleFooter from "./ModuleFooter.vue";
import ModuleHeader from "./ModuleHeader.vue";

export default {
  name: "ModuleCardBase",
  props: [
    "moduleTitle",
    "moduleSubTitle",
    "footerButton1",
    "footerButton2",
    "footerButton3",
    "footerButton1_text",
    "moduleContent",
  ],
  components: {
    ModuleHeader,
    ModuleFooter,
  },
};
</script>

<style></style>
