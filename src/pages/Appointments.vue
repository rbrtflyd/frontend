<template>
  <space-vue>
    <template slot="sidebar">
      <div>
        <h1 class="text-xl text-slate-700">Appointments</h1>
        <h3 class="text-sm text-slate-600">14 New Patients</h3>
      </div>
      <div class="flex flex-col space-y-4">
        <item-card
          v-for="edge in $page.encounter.edges"
          item_type="appointment"
          :appointmentTime="edge.node.time | luxon"
          :key="edge.node.id"
          variant="tertiary"
          :path="edge.node.path"
          :itemHeading="edge.node.patient.name"
        />
      </div>
    </template>
    <template slot="page-content"> </template>
  </space-vue>
</template>

<page-query>
query {
  encounter: allEncounter {
    edges {
      node {
        id
        apptTime
        path
        patient {
          name
        }
        vitals {
          id
        }
      }
    }
  }
}
</page-query>

<script>
import SpaceVue from "../layouts/Space.vue";
import ItemCard from "../components/Cards/ItemCard.vue";

export default {
  components: {
    SpaceVue,
    ItemCard,
  },
  methods: {},
};
</script>

<style></style>
