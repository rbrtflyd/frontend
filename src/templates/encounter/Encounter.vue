<template>
  <space-vue
    spaceTitle="Appointments"
    spaceMeta="Test"
    :hasSidebarActions="true"
  >
    <template #spaceSidebarList>
      <item-card
        v-for="appointments in $page.encounter.user.appointments"
        :key="appointments.id"
        item_type="appointment"
        :appointmentTime="appointments.apptTime | luxon"
        :path="appointments.path"
        :itemHeading="appointments.patient.name"
        :status="appointments.status"
      />
    </template>
    <template #spaceSidebarActions>
      <t-button variant="secondary">Test</t-button>
    </template>
    <template slot="page-content">
      <div class="flex flex-row gap-x-4">
        <module-card-base
          :moduleTitle="$page.encounter.apptTime | luxon"
          :moduleSubTitle="$page.encounter.room"
          :footerButton1="$page.encounter.path + 'note'"
          footerButton1_text="Begin"
        />
      </div>
    </template>
    <template #spaceNav>
      <t-button
        v-for="appointments in $page.encounter.user.appointments"
        :key="appointments.id"
        variant="buttonXl"
        :to="appointments.path"
        >{{ appointments.apptTime | luxon }}</t-button
      >
    </template>
  </space-vue>
</template>

<page-query>
query ($id: ID!) {
  encounter (id: $id) {
    apptTime
    status
    path
    room
    vitals {
            id
    heartRate
    bloodPressure
    pulseOx
    temperature
    weight
    }
    user {
      name
      appointments(sort: [{by: "apptTime", order: ASC}]) {
        id
        apptTime
        path
        status
        patient {
            name
        }
      }
    }
    patient {
    name
    }
  }
}
</page-query>

<script>
import SpaceVue from "../../layouts/Space.vue";
import ItemCard from "../../components/Cards/ItemCard.vue";
import ModuleCardBase from "../../components/Cards/Modules/ModuleCardBase.vue";

export default {
  components: {
    SpaceVue,
    ItemCard,
    ModuleCardBase,
  },
  data() {
    return {
      module: {
        notePath: "/note",
      },
    };
  },
  computed: {},
  methods: {},
};
</script>

<style>
.active {
  opacity: 100%;
}
</style>
