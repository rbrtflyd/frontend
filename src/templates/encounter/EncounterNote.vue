<template>
  <flow-detail
    flowHeaderTitle="Now"
    flowContext="Note"
    :patientName="$page.encounter.patient.name"
  >
    <template #content>
      <div class="flex flex-row gap-x-6 flex-grow">
        <div class="w-3/5">
          <div class="mb-6 border-b border-slate-200">
            <h2 class="mb-3 text-lg font-semibold">Vitals</h2>
            <div class="flex flex-row mb-6 gap-x-2">
              <vital-item-card
                :item="{
                  value: $page.encounter.vitals.weight,
                  vitalType: 'Weight',
                  unit: 'lbs',
                }"
              />
              <vital-item-card
                :item="{
                  value: $page.encounter.vitals.heartRate,
                  vitalType: 'Heart Rate',
                  unit: 'bpm',
                }"
              />
              <vital-item-card
                :item="{
                  value: $page.encounter.vitals.bloodPressure,
                  vitalType: 'BP',
                }"
              />
              <vital-item-card
                :item="{
                  value: $page.encounter.vitals.temperature,
                  vitalType: 'Temp',
                  unit: 'F',
                }"
              />
              <vital-item-card
                :item="{
                  value: $page.encounter.vitals.pulseOx,
                  vitalType: 'Sp02',
                  unit: '%',
                }"
              />
              <vital-item-card
                :item="{
                  value: $page.encounter.vitals.pulseOx,
                  vitalType: 'Sp02',
                  unit: '%',
                }"
              />
            </div>
          </div>
          <div class="mb-6">
            <editor-content
              :editor="chiefComplaintDoc"
              class="tiptap-editor text-xl z-50"
            />
          </div>
          <div>
            <floating-menu
              :editor="editor"
              :tippyOptions="{ maxWidth: 'none' }"
              v-if="editor"
              class="hidden transition-all editor-toolbar"
            >
              <button
                @click="
                  editor
                    .chain()
                    .focus()
                    .createParagraphNear()
                    .insertContent(hpi)
                    .toggleHeading({ level: 2 })
                    .createParagraphNear()
                    .insertContent('<p></p>')
                    .run()
                "
                v-on:click="show = 0"
              >
                HPI
              </button>
              <div class="flex flex-row items-center">
                <button
                  @click="
                    editor
                      .chain()
                      .focus()
                      .insertContent(exam)
                      .toggleHeading({ level: 2 })
                      .createParagraphNear()
                      .insertContent('<p></p>')
                      .run()
                  "
                  v-on:click="show = 1"
                >
                  Exam
                </button>
                <div class="overflow-hidden">
                  <transition name="showSubMenu">
                    <div
                      v-if="show"
                      class="flex flex-row overflow-hidden bg-gray-700 editor-subtoolbar"
                    >
                      <button
                        @click="
                          editor
                            .chain()
                            .focus()
                            .createParagraphNear()
                            .insertContent(general)
                            .toggleHeading({ level: 3 })
                            .createParagraphNear()
                            .insertContent('<p></p>')
                            .run()
                        "
                      >
                        General
                      </button>
                      <button
                        @click="
                          editor
                            .chain()
                            .focus()
                            .createParagraphNear()
                            .insertContent(heent)
                            .toggleHeading({ level: 3 })
                            .createParagraphNear()
                            .insertContent('<p></p>')
                            .run()
                        "
                      >
                        HEENT
                      </button>
                      <button
                        @click="
                          editor
                            .chain()
                            .focus()
                            .createParagraphNear()
                            .insertContent(chest)
                            .toggleHeading({ level: 3 })
                            .createParagraphNear()
                            .insertContent('<p></p>')
                            .run()
                        "
                      >
                        Chest
                      </button>
                      <button
                        @click="
                          editor
                            .chain()
                            .focus()
                            .createParagraphNear()
                            .insertContent(heart)
                            .toggleHeading({ level: 3 })
                            .createParagraphNear()
                            .insertContent('<p></p>')
                            .run()
                        "
                      >
                        Heart
                      </button>
                      <button
                        @click="
                          editor
                            .chain()
                            .focus()
                            .createParagraphNear()
                            .insertContent(abdomen)
                            .toggleHeading({ level: 3 })
                            .createParagraphNear()
                            .insertContent('<p></p>')
                            .run()
                        "
                      >
                        Abdomen
                      </button>
                      <button
                        @click="
                          editor
                            .chain()
                            .focus()
                            .createParagraphNear()
                            .insertContent(skin)
                            .toggleHeading({ level: 3 })
                            .createParagraphNear()
                            .insertContent('<p></p>')
                            .run()
                        "
                      >
                        Skin
                      </button>
                      <button
                        @click="
                          editor
                            .chain()
                            .focus()
                            .createParagraphNear()
                            .insertContent(extremities)
                            .toggleHeading({ level: 3 })
                            .createParagraphNear()
                            .insertContent('<p></p>')
                            .run()
                        "
                        v-on:click="
                          toolbarShow = 1;
                          show = 0;
                        "
                      >
                        Extremities
                      </button>
                    </div>
                  </transition>
                </div>
                <button
                  v-on:click="show = !show"
                  class="bg-gray-900 rounded-lg subtoolbar-button "
                >
                  <font-awesome-icon
                    :icon="['far', 'chevron-right']"
                    class="text-xs"
                  />
                </button>
              </div>
              <button
                @click="
                  editor
                    .chain()
                    .focus()
                    .insertContent(assessment)
                    .toggleHeading({ level: 2 })
                    .createParagraphNear()
                    .insertContent('<p></p>')
                    .run()
                "
                :class="{
                  'is-active': editor.isActive('assessment', { level: 5 }),
                }"
                v-on:click="show = 0"
              >
                Assessment
              </button>
              <button
                @click="
                  editor
                    .chain()
                    .focus()
                    .insertContent(plan)
                    .toggleHeading({ level: 2 })
                    .createParagraphNear()
                    .insertContent('<p></p>')
                    .run()
                "
                :class="{
                  'is-active': editor.isActive('assessment', { level: 5 }),
                }"
                v-on:click="show = 0"
              >
                Plan
              </button>
            </floating-menu>
            <bubble-menu
              :editor="editor"
              :tippy-options="{ duration: 100 }"
              class="bg-white p-2 border border-slate-200 flex flex-row gap-x-2"
              v-if="editor"
            >
              <button
                @click="
                  editor
                    .chain()
                    .focus()
                    .toggleBold()
                    .run()
                "
                :class="{ 'is-active': editor.isActive('bold') }"
              >
                bold
              </button>
              <button
                @click="
                  editor
                    .chain()
                    .focus()
                    .toggleItalic()
                    .run()
                "
                :class="{ 'is-active': editor.isActive('italic') }"
              >
                italic
              </button>
              <button
                @click="
                  editor
                    .chain()
                    .focus()
                    .toggleStrike()
                    .run()
                "
                :class="{ 'is-active': editor.isActive('strike') }"
              >
                strike
              </button>
            </bubble-menu>
            <editor-content
              :editor="editor"
              class="tiptap-editor text-xl z-50"
            />
          </div>
        </div>
        <div
          class="p-6 bg-slateTransparent-3 justify-self-stretch flex-grow rounded-2xl"
        >
          <span class="font-bold text-slate-600">Suggestions</span>
        </div>
      </div>
      <div
        class="flex flex-row px-3 py-2 bg-white rounded-xl drop-shadow-xl absolute inset-x-0 bottom-0 mb-6 mr-6"
      >
        <t-rich-select
          placeholder="Select an option"
          :options="[
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 3, label: 'Option 3' },
          ]"
        >
        </t-rich-select>
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
    }
    user {
      name
    }
    patient {
      name
      age
      sex
      pronouns
    }
  }
}
</page-query>

<script>
import VitalItemCard from "../../components/Cards/VitalItemCard.vue";
import FlowDetail from "../../layouts/FlowDetail.vue";

// import TipTap Foundaiton
import {
  Editor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
  VueRenderer,
} from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import Highlight from "@tiptap/extension-highlight";
import TipTapImage from "@tiptap/extension-image";
import Mention from "@tiptap/extension-mention";
import suggestion from "../../extensions/suggestion";
import DraggableItem from "../../extensions/draggableItem";
import MentionList from "../../components/Editor/MentionList.vue";

// import Tippy.js
import tippy from "tippy.js";

export default {
  name: "EncounterNote",

  components: {
    // Custom Prototype Components
    FlowDetail,
    VitalItemCard,

    // TipTap Editor Extension Components
    Editor,
    EditorContent,
    TipTapImage,
    Mention,
    FloatingMenu,
    BubbleMenu,
  },

  data() {
    return {
      editor: null,
      chiefComplaintDoc: null,
      item: null,
      // General Note Toolbar
      hpi: "HPI",
      exam: "Exam",
      assessment: "Assessment",
      plan: "Plan",
      // Exam Toolbar
      general: "General",
      heent: "HEENT",
      chest: "Chest",
      heart: "Heart",
      abdomen: "Abdomen",
      skin: "Skin",
      extremities: "Extremities",
      // Show and Hide exam toolbar when exam button is clicked
      show: 0,
      toggleButtons: 1,
      variable: "variable ",
    };
  },

  computed: {
    patientMeta() {
      return this.$page.encounter.patient;
    },
    encounterVitals() {
      return this.$page.encounter.vitals;
    },
  },
  mounted() {
    this.chiefComplaintDoc = new Editor({
      extensions: [
        StarterKit,
        Highlight.configure({
          HTMLAttributes: {
            class: "chief-complaint-highlight",
          },
        }),
      ],
      editorProps: {
        attributes: {
          // Style the editor by default
          class:
            "editor-container focus:outline-none focus:ring-0 my-4 max-w-prose",
        },
      },
      content: `<h2>Chief Complaint</h2><p><mark>${
        this.$page.encounter.chiefComplaint
      }</mark></p>`,
    });
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Placeholder.configure({
          placeholder: "Begin typing...",
          emptyEditorClass: "is-editor-empty",
          emptyNodeClass: "my-custom-is-empty-class",
        }),
        DraggableItem,
        Highlight.configure({
          multicolor: true,
          HTMLAttributes: {
            class: "highlight",
          },
        }),
        Mention.configure({
          suggestion: {
            char: "/",
            allowedPrefixes: null,

            items: ({ query }) => {
              return [
                `Name ${this.patientMeta.name}`,
                `Age ${this.patientMeta.age}`,
                `Sex ${this.patientMeta.sex}`,
                `Weight ${this.encounterVitals.weight}`,
                `Blood Pressure ${this.encounterVitals.bloodPressure}`,
                `Temperature ${this.encounterVitals.temperature}`,
              ]
                .filter((item) =>
                  item.toLowerCase().startsWith(query.toLowerCase())
                )
                .slice(0, 12);
            },

            render: () => {
              let component;
              let popup;

              return {
                onStart: (props) => {
                  component = new VueRenderer(MentionList, {
                    // using vue 2:
                    parent: this,
                    propsData: props,
                    // using vue 3:
                    // props,
                    // editor: props.editor,
                  });

                  if (!props.clientRect) {
                    return;
                  }

                  popup = tippy("body", {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: "manual",
                    placement: "bottom-start",
                  });
                },

                onUpdate(props) {
                  component.updateProps(props);

                  if (!props.clientRect) {
                    return;
                  }

                  popup[0].setProps({
                    getReferenceClientRect: props.clientRect,
                  });
                },

                onKeyDown(props) {
                  if (props.event.key === "Escape") {
                    popup[0].hide();

                    return true;
                  }

                  return component.ref?.onKeyDown(props);
                },

                onExit() {
                  popup[0].destroy();
                  component.destroy();
                },
              };
            },
          },
          renderLabel({ node }) {
            return `${node.attrs.label ?? node.attrs.id}`;
          },
          HTMLAttributes: {
            class: "mention",
          },
          decorationTag: "a",
          decorationClass: "customMention",
        }),
      ],
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

<style>
.editor-container {
  h2 {
    @apply font-semibold mt-4;
  }
  p {
    @apply mt-2;
  }
}

.tippy-bx {
  max-width: none !important;
}

.mention {
  @apply border-b-2 border-blue-500 bg-blue-50 px;
}

.chief-complaint-highlight {
  @apply border-b-2 border-blue-500 bg-blue-50;
}

.hightlight {
  @apply border-b-2 border-blue-500 bg-blue-200;
}

.editor-toolbar {
  @apply text-sm bg-gray-900 text-white rounded-lg flex flex-row overflow-hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  button {
    @apply px-3 py-2 hover:bg-gray-800 hover:text-gray-400 transition flex flex-row items-center;

    .is-active {
      @apply bg-blue-500 text-white;
    }
  }
  .subtoolbar-button {
    @apply text-gray-300 hover:bg-gray-700 hover:text-white;
  }
  .editor-subtoolbar {
    &::-webkit-scrollbar {
      display: none;
    }
    button {
      @apply hover:text-gray-400;
    }
  }
}

.showSubMenu-enter {
  @apply w-0;
}
.showSubMenu-leave {
  width: 508px;
}
.showSubMenu-enter-to {
  width: 508px;
}
.showSubMenu-leave-to {
  width: 0;
}
.showSubMenu-enter-active {
  @apply transition-all duration-500;
}
.showSubMenu-leave-active {
  @apply transition-all duration-500;
}
</style>
