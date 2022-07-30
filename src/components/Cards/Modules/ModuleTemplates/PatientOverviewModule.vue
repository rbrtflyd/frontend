<template>
  <module-card-base
    :moduleTitle="$page.encounter.apptTime | luxon"
    :moduleSubTitle="$page.encounter.room"
    :footerButton1="$page.encounter.path + 'note'"
    footerButton1_text="Begin"
    :footerButton2="$page.encounter.patient.path"
    footerButton2_text="View Chart"
  >
    <template #moduleContent>
      <div class="w-full flex flex-row items-center justify-between mb-6">
        <t-tag variant="apptType">{{ apptType }}</t-tag>
        <div class="flex flex-row text-xs gap-x-2">
          <span>{{ age }} yo</span>
          <span>{{ sex }}</span>
          <span>{{ pronouns }}</span>
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
    age: Number,
    sex: String,
    pronouns: String,
    apptType: String,
  },
};
</script>

<style></style>
