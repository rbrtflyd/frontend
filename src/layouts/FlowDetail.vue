<template>
  <div class="flex flex-col h-screen">
    <global-navigation />
    <flow-detail-navigation :title="flowHeaderTitle" :context="flowContext" />
    <div class="flex flex-row h-full">
      <patient-sidebar :patientName="patientName" />
      <div class="px-8 py-6 content flex-grow relative">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
import FlowDetailNavigation from "../components/Navigation/FlowDetailNavigation.vue";
import GlobalNavigation from "../components/Navigation/GlobalNavigation.vue";
import PatientSidebar from "../components/Structural/PatientSidebar.vue";

export default {
  components: {
    GlobalNavigation,
    FlowDetailNavigation,
    PatientSidebar,
  },
  props: ["flowHeaderTitle", "flowContext", "patientName", "content"],
  data() {
    return {};
  },
};
</script>

<style></style>
