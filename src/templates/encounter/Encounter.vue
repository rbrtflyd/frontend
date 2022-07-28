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
      {{ $page.encounter.apptTime | luxon }}
      {{ $page.encounter.patient.name }}
      <t-button :to="$page.encounter.path + 'note'">Begin Encounter</t-button>
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

export default {
  components: {
    SpaceVue,
    ItemCard,
  },
  data() {
    return {};
  },
  computed: {
    nextAppt() {
      return this.$page.user.appointments;
    },
  },
  methods: {},
};
</script>

<style>
.active {
  opacity: 100%;
}
</style>
