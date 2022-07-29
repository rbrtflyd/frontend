<template>
  <module-card-base
    :moduleTitle="$page.encounter.apptTime | luxon"
    :moduleSubTitle="$page.encounter.room"
    :footerButton1="$page.encounter.path + 'note'"
    footerButton1_text="Begin"
  >
    <template #moduleContent>
      <div class="w-full flex flex-row items-center justify-between mb-6">
        <t-tag variant="apptType">Follow Up</t-tag>
        <div class="flex flex-row text-xs gap-x-2">
          <span>53 yo</span>
          <span>Female</span>
          <span>She/Her</span>
        </div>
      </div>
      <div class="w-full">
        <div class="flex flex-col gap-y-1">
          <span class="font-bold text-slate-700 text-base leading-none">{{
            cardTitle
          }}</span>
          <span class="text-sm">{{ chiefCompalint }}</span>
        </div>
      </div>
    </template>
  </module-card-base>
</template>

<script>
import ModuleCardBase from "../ModuleBase/ModuleCardBase.vue";
export default {
  name: "PatientOverviewModule",
  components: {
    ModuleCardBase,
  },
  props: {
    cardTitle: String,
    chiefCompalint: String,
  },
};
</script>

<style></style>
