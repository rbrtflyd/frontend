<template>
  <flow-detail
    flowHeaderTitle="Now"
    flowContext="Note"
    :patientName="$page.encounter.patient.name"
  >
    <template #content>
      <div class="flex flex-row gap-x-6 grow">
        <div class="w-3/5">
          <div class="mb-6 border-b border-slate-200">
            <h2 class="mb-3 text-lg font-semibold">Vitals</h2>
            <div class="flex flex-row mb-6 gap-x-2">
              <vital-item-card
                type="Weight"
                unit="lbs"
                :value="$page.encounter.vitals.weight"
              />
              <vital-item-card
                type="Heart Rate"
                unit="bpm"
                :value="$page.encounter.vitals.heartRate"
              />
              <vital-item-card
                type="BP"
                :value="$page.encounter.vitals.bloodPressure"
              />
              <vital-item-card
                type="Temp"
                unit="F"
                :value="$page.encounter.vitals.temperature"
              />
              <vital-item-card
                type="Sp02"
                unit="%"
                :value="$page.encounter.vitals.pulseOx"
              />
            </div>
          </div>
          <div class="mb-6">
            <h2 class="mb-3 text-lg font-semibold">Chief Complaint</h2>
            <span class="text-lg border-b-2 border-blue-500 bg-blue-50">{{
              $page.encounter.chiefComplaint
            }}</span>
          </div>
          <div>
            <floating-menu> </floating-menu>
            <editor-content :editor="editor" class="tiptap-editor" />
          </div>
        </div>
        <div
          class="p-6 bg-slateTransparent-3 justify-self-stretch grow rounded-2xl"
        >
          <span class="font-bold text-slate-600">Suggestions</span>
        </div>
      </div>
      <div class="flex flex-row px-3 py-2 bg-white rounded-xl drop-shadow-xl">
        <t-button>Wrap Up</t-button>
      </div>
    </template>
  </flow-detail>
</template>

<page-query>
query ($id: ID!) {
  encounter (id: $id) {
    apptTime
    status
    chiefComplaint
    vitals {
        id
        weight
        heartRate
        bloodPressure
        pulseOx
        temperature
    heartRate
    bloodPressure
    pulseOx
    temperature
    weight
    }
    user {
      name
    }
    patient {
    name
    }
  }
}
</page-query>

<script>
import VitalItemCard from "../../components/Cards/VitalItemCard.vue";
import FlowDetail from "../../layouts/FlowDetail.vue";

// import TipTap Foundaiton
import TipTap from "../../components/Editor/TipTap.vue";
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Mention from "@tiptap/extension-mention";

export default {
  name: "EncounterNote",

  components: {
    // Custom Prototype Components
    FlowDetail,
    VitalItemCard,

    // TipTap Editor Extension Components
    TipTap,
    EditorContent,
    Image,
    Mention,
  },

  data() {
    return {
      editor: null,
    };
  },

  mounted() {
    this.editor = new Editor({
      content: `
            <h1> Editor ready</h1>
            `,
      extensions: [StarterKit, Highlight],
      editorProps: {
        attributes: {
          // Style the editor by default
          class:
            "editor-container focus:outline-none focus:ring-0 my-4 max-w-prose",
        },
      },
    });
  },

  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style></style>
