// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require("~/main.css");

import VueLuxon from "vue-luxon";

import DefaultLayout from "~/layouts/Default.vue";

import VueTailwind from "vue-tailwind";

import {
  TButton,
  TCard,
  TDropdown,
  TDatepicker,
  TRichSelect,
  TInputGroup,
  TTag,
  TInput,
} from "vue-tailwind/dist/components";

const VueTailwindComponents = {
  "t-button": {
    component: TButton,
    props: {
      // FixedClasses are applied globally regardless of variant and will be combined with other classes
      fixedClasses: "block font-medium focus:outline-none transition-colors",
      // Classes are applied to the component without any variant (the default)
      classes:
        "text-gray-900 px-4 py-1 rounded-xl border-2 border-transparent hover:bg-gray-0 hover:text-gray-600 hover:border-gray-400 text-base",
      // Variants define specific types of components with styling and are added via variant= when writing the component
      variants: {
        primary:
          "bg-emerald-500 px-4 py-1 text-white border-2 rounded-xl  border-emerald-500 hover:bg-emerald-100 hover:border-emerald-500 hover:text-emerald-600",
        secondary:
          "bg-blue-100 px-4 py-1 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl ",
        full: "w-full rounded-xl ",
        link:
          "capitalize text-left text-gray-900 border-b border-blue-600 hover:bg-blue-100 px-0.5 py-0.5 hover:text-blue-600 hover:border-blue-600 rounded-t-sm",
        destructive:
          "px-4 py-1 rounded-xl text-gray-400 border-2 border-red-500 border-opacity-0 hover:bg-red-100 hover:border-opacity-100 hover:text-red-600",
        icon:
          "flex flex-col items-center w-12 h-12 mr-5 text-2xl text-white bg-blue-600 rounded-full justify-center hover:bg-blue-900",
        buttonXl:
          "bg-white rounded-xl border-gray-200 border-2 xl:text-sm 2xl:text-base xl:p-4 2xl:p-4 hover:bg-gray-100 flex flex-row justify-between items-center gap-x-4",
        enlargeButton:
          "bg-white rounded-xl border-gray-200 border-2 p-3 w-full text-left hover:bg-gray-100 hover:text-gray-600 trasition-colors",
        cardButton:
          "bg-white bg-opacity-80 2xl:px-4 2xl:py-6 2xl:text-base rounded-lg font-medium text-gray-600 xl:text-xs xl:py-2 xl:px-2 hover:bg-opacity-100 hover:bg-blue-600 hover:text-white hover:shadow-sm",
      },
    },
  },
  "t-card": {
    component: TCard,
    props: {
      fixedClasses: {
        wrapper: "text-left rounded-xl drop-shadow-md",
        body: "",
        header: "",
        footer: "",
      },
      classes: {
        wrapper: "w-card h-400 bg-white relative",
        body: "p-4 bg-white",
        header: "bg-ultraLightGray border-b px-4 py-3 rounded-t-xl",
        footer:
          "bg-white border-t border-gray-200 px-4 py-3 rounded-b-xl absolute inset-x-0 bottom-0 xl:mt-2 2xl:mt-5",
      },
      variants: {
        space: {
          wrapper:
            "flex flex-col justify-between text-left bg-opacity-80 bg-white hover:shadow-sm hover:bg-opacity-100 border-none p-6",
          body: "",
          header: "",
          footer: "pt-2 border-t border-gray-200 place-items-end space-info",
        },
        bigCardActive: {
          wrapper: "w-3/4 3xl:w-3/5 rounded-xl relative",
          body: "bg-ultraLightGray h-bigCard",
          header: "px-4 py-3 bg-emerald-500 text-white rounded-t-xl",
          footer:
            "bg-white border-t border-gray-200 px-4 py-3 rounded-b-xl absolute inset-x-0 bottom-0 bg-opacity-5 bg-blur",
        },
        active: {
          wrapper: "xl:w-2/5 2xl:w-1/3 3xl:w-1/4 bg-white",
          body: "p-4 h-144 overflow-scroll",
          header: "px-4 py-3 bg-emerald-500 text-white rounded-t-xl",
          footer:
            "bg-white border-t border-gray-200 px-4 py-3 rounded-b-xl bg-opacity-40 bg-blur",
        },
        preview: {
          wrapper: "shadow-xl border-0",
          header: "border-0",
          footer: "border-0",
        },
        vital: {
          wrapper: "w-auto bg-white rounded-lg px-4 py-3 shadow",
          body: "",
          header: "text-sm border-0",
          footer: "",
        },
        variableInput: {
          wrapper: "bg-white rounded-xl border-gray-200 bg-blur bg-opacity-70",
          body: "p-6 text-3xl",
          header: "px-6 py-4 border-b border-gray-200",
          footer: "",
        },
      },
    },
  },
  "t-dropdown": {
    component: TDropdown,
    props: {
      fixedClasses: {
        button:
          "flex items-center text-white block bg-gray-500 border-gray-200 h-9 w-9 rounded-xl transition duration-100 ease-in-out border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
        wrapper: "inline-flex flex-col",
        dropdownWrapper: "relative z-10",
        dropdown: "origin-top-right absolute left-0 w-56 rounded shadow mt-1",
        enterClass: "",
        enterActiveClass:
          "transition ease-out duration-100 transform opacity-0 scale-95",
        enterToClass: "transform opacity-100 scale-100",
        leaveClass: "transition ease-in transform opacity-100 scale-100",
        leaveActiveClass: "",
        leaveToClass: "transform opacity-0 scale-95 duration-75",
      },
      classes: {
        button: "bg-blue-500 hover:bg-blue-600",
        dropdown: "bg-white",
      },
      variants: {
        danger: {
          button: "bg-red-500 hover:bg-red-600",
          dropdown: "bg-red-50",
        },
      },
    },
  },
  "t-datepicker": {
    component: TDatepicker,
    props: {},
  },
  "t-rich-select": {
    component: TRichSelect,
    props: {},
  },
  "t-input-group": {
    component: TInputGroup,
    props: {},
  },
  "t-input": {
    component: TInput,
    props: {
      fixedClasses: "",
      classes: "",
      variants: {
        invisible: "bg-transparent border-none",
      },
    },
  },
  "t-tag": {
    component: TTag,
    props: {
      fixedClasses: "inline-block",
      classes: "",
      variants: {
        title: "text-2xl leading-8 font-extrabold text-gray-900 tracking-tight",
        subtitle: "text-lg leading-6 font-medium text-gray-900",
        error: "text-red-500",
        apptType:
          "bg-teal-light px-2 py-0.5 rounded-lg text-teal-dark font-semibold text-xs",
        badge:
          "inline-flex items-center px-2 py-0.5 text-sm rounded-md bg-gray-200 text-gray-700 font-medium",
        avatar:
          "inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 overflow-hidden leading-none text-center",
        statusActive: "text-blue-600 font-normal text-xs",
        statusInActive: "text-gray-400 font-normal text-xs",
      },
    },
  },
};

// Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import Specific Icons
import {
  faBell,
  faCog,
  faCheckCircle,
  faChevronRight,
  faMicrophone,
  faPlusCircle,
  faTrashAlt,
  faExpandAlt,
  faArrowRight,
  faPlus,
  faWalking,
  faShare,
  faArrowDown,
  faArrowUp,
  faSearch,
  faTimes,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import {
  faBell as farBell,
  faCheckCircle as farCheckCircle,
  faChevronRight as farChevronRight,
  faPlusCircle as farPlusCircle,
  faArrowToRight as farArrowToRight,
  faArrowToLeft as farArrowToLeft,
  faTrashAlt as farTrashAlt,
  faArrowRight as farArrowRight,
  faSignIn as farSignIn,
  faPlus as farPlus,
  faStethoscope as farStethoscope,
  faHeartRate as farHeartRate,
  faPrescription as farPrescription,
  faXRay as farXRay,
  faFileMedicalAlt as farFileMedicalAlt,
  faSyncAlt as farSyncAlt,
  faArrowDown as farArrowDown,
  faArrowUp as farArrowUp,
  faSearch as farSearch,
  faTimes as farTimes,
  faClock as farClock,
} from "@fortawesome/pro-regular-svg-icons";

import {
  faCheckCircle as fasCheckCircle,
  faMicrophone as fasMicrophone,
  faTrashAlt as fasTrashAlt,
  faPlus as fasPlus,
  faPrescription as fasPrescription,
  faWalking as fasWalking,
  faShare as fasShare,
  faClock as fasClock,
} from "@fortawesome/pro-solid-svg-icons";

// Add Specific FontAwesome Icons
library.add(
  faBell,
  farBell,
  faCog,
  faCheckCircle,
  farCheckCircle,
  fasCheckCircle,
  faChevronRight,
  farChevronRight,
  faMicrophone,
  fasMicrophone,
  faPlusCircle,
  farPlusCircle,
  farArrowToLeft,
  farArrowToRight,
  faTrashAlt,
  farTrashAlt,
  fasTrashAlt,
  faExpandAlt,
  faArrowRight,
  farArrowRight,
  farSignIn,
  faPlus,
  farPlus,
  fasPlus,
  farStethoscope,
  farHeartRate,
  farPrescription,
  fasPrescription,
  farXRay,
  farFileMedicalAlt,
  farSyncAlt,
  faWalking,
  fasWalking,
  faShare,
  fasShare,
  faArrowDown,
  farArrowDown,
  faArrowUp,
  farArrowUp,
  faSearch,
  farSearch,
  farTimes,
  farClock,
  fasClock
);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome-icon", FontAwesomeIcon);
  Vue.use(VueTailwind, VueTailwindComponents);
  Vue.use(VueLuxon, {
    input: {
      zone: "utc",
      format: "iso",
    },
    output: {
      zone: "gmt",
      format: "time",
    },
  });
}
