<template>
    <space-vue spaceTitle="Appointments" spaceMeta="Test" :hasSidebarActions="true">
        <template #spaceSidebarList>
          <item-card v-for="appointments in $page.encounter.user.appointments" :key="appointments.id"  item_type="appointment" :appointmentTime="appointments.time | luxon" variant="tertiary" :path="appointments.path" :itemHeading="appointments.patient.name" :appointmentStatus="appointments.status"/>
        </template>
        <template #spaceSidebarActions>
            <t-button variant="secondary" >Test</t-button>
        </template>
        <template slot="page-content">
            {{$page.encounter.time | luxon}}
            {{$page.encounter.patient.name}}
            <t-button :to="$page.encounter.path + 'note'">Begin Encounter</t-button>
        </template>
        <template #spaceNav>
            <t-button v-for="appointments in $page.encounter.user.appointments" :key="appointments.id" variant="buttonXl" :to="appointments.path" >{{appointments.time | luxon}}</t-button>
        </template>

    </space-vue>
</template>

<page-query>
query ($id: ID!) {
  encounter (id: $id) {
    time
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
      appointments {
        id
        time
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
import SpaceVue from '../../layouts/Space.vue'
import ItemCard from '../../components/Cards/ItemCard.vue'

export default {
    components: {
    SpaceVue,
    ItemCard,
},
    data() {
        return {
        }
    },
    methods: {
        nextAppt() {
            this.appointments.index+1
        }
    }
}
</script>

<style>

.active {
    opacity: 100%;
}

</style>