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
      :primaryButton="{ path: footerButton1, text: footerButton1_text }"
      :secondaryButton="{ path: footerButton2, text: footerButton2_text }"
      :tertiaryButton="{ path: footerButton3, text: footerButton3_text }"
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
    "footerButton2_text",
    "footerButton3_text",
    "moduleContent",
  ],
  components: {
    ModuleHeader,
    ModuleFooter,
  },
};
</script>

<style></style>
