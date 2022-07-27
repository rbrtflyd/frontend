<template>
  <Layout>
    <div class="container">

      <div class="mt-6">
        <h1 class="mb-4 text-3xl lg:mb-2 md:text-2xl">
            Welcome back, Dr. Cooper
        </h1>
        <div class="mb-12 text-2xl lg:mb-6 grid-header md:text-lg">
          <h2 class="inline">
            Today is
          </h2>
          <h2 class="inline opacity-50">
            {{ day }}
          </h2>
        </div>
      </div>

      <div class="grid-wrapper">
        <div class="grid items-stretch grid-cols-3 gap-4">

          <div class="col-span-1 p-6 rounded-3xl bg-slateTransparent-3">
            <div class="mb-5">
              <span class="block pb-2 text-xl text-slate-700">Appointments</span>
              <span class="block text-slate-700">35 Appointments Today</span>
            </div>
            <div class="flex flex-col mb-6 space-y-3">
              <item-card v-for="(edge) in $page.encounters.edges" item_type="appointment" :appointmentTime="edge.node.time | luxon" :key="edge.node.id" variant="tertiary" :path="edge.node.path" :itemHeading="edge.node.patient.name" :appointmentStatus="edge.node.status" />
              <t-button to="/appointment/recxtbIo9wlbJDycu/">+23 More</t-button>
            </div>
            <div class="pt-2 border-t border-slate-200">
                <span class="text-sm text-slate-700">14 Follow Ups, 7 New Patients, 3 Physicals</span>
            </div>
          </div>
          
          <div class="flex flex-col justify-between col-span-1 space-y-4 place-items-stretch">

            <div class="h-full p-6 rounded-3xl bg-slateTransparent-3">
              <div>
                <span class="text-xl text-slate-700">Orders</span>
                <span class="block text-slate-700">24 Orders</span>
              </div>
              <div class="flex flex-col mb-4 space-y-3">
                <item-card v-for="(edge) in $page.orders.edges.slice(0,2)" item_type="order" :key="edge.node.id" variant="tertiary"  :itemHeading="edge.node.patient.name" :appointmentTime="edge.node.name" />
                <t-button to="/appointment/recxtbIo9wlbJDycu/">See all Orders</t-button>
              </div>
              <div class="pt-2 border-t border-slate-200">
                <span class="text-sm text-slate-700">14 Follow Ups, 7 New Patients, 3 Physicals</span>
              </div>
            </div>

            <div class="h-full p-6 rounded-3xl bg-slateTransparent-3">
              <div>
                <span class="text-xl text-slate-700">Messages</span>
                <span class="block text-slate-700">15 Messages</span>
              </div>
            </div>

          </div>

          <div class="flex flex-row flex-wrap justify-end col-span-1 gap-2">
            <space-icon-card href="/appointment/recxtbIo9wlbJDycu/" name="Appointments" number="4" item="Appointments" details="4 New Patients, 12 Follow Ups, 1 Chief Complaint"/>
            <space-icon-card name="Orders" number="14" item="Orders" details="4 Imaging, 24 Blood Work, 7 Rx"/>
            <space-icon-card name="Billing" number="32" item="Outstanding"/>
            <space-icon-card name="Messages" number="176" item="Messages" details="3 Patients, 5 Care Team"/>
            <space-icon-card name="Patients" number="415" item="Patients"/>
            <space-icon-card name="Care Team" number="16" item="Members"/>
            <space-icon-card name="Marketing"/>
            <space-icon-card name="Hiring" number="12" item="Applicants"/>
          </div>
        </div>
      </div>  
    </div>
  </Layout>
</template>

<page-query>
  query {
    patients: allPatient {
      edges {
        node {
          name
          id
        }
      }
    }
    encounters: allEncounter {
      edges {
        node {
          id
          time
          status
          path
          patient {
            name
          }
        }
      }
    }
    orders: allOrder {
      edges {
        node {
          name
          id
          patient {
            name
          }
        }
      }
    }
  }


</page-query>

<script>
import SpaceIconCard from '../components/Cards/SpaceIconCard.vue'
import ItemCard from '../components/Cards/ItemCard.vue'

export default {
  components: { 
    SpaceIconCard,
    ItemCard
  },
  metaInfo: {
    title: 'HealthcareOS'
  },
  name: 'Launchpad',
  data () {
    return {

    }
  },
  created() {
    setInterval(this.getNow, 1000)
  },
  computed: {
    day: function () {
      const today = new Date()
      const day = today.getDate()
      const weekDay = today.getDay()
      const month = today.getMonth()
      var weekDayName = new Array(7)
      weekDayName[0] = 'Sunday'
      weekDayName[1] = 'Monday'
      weekDayName[2] = 'Tuesday'
      weekDayName[3] = 'Wednesday'
      weekDayName[4] = 'Thursday'
      weekDayName[5] = 'Friday'
      weekDayName[6] = 'Saturday'
      var monthName = new Array(12)
      monthName[0] = 'January'
      monthName[1] = 'February'
      monthName[2] = 'March'
      monthName[3] = 'April'
      monthName[4] = 'May'
      monthName[5] = 'June'
      monthName[6] = 'July'
      monthName[7] = 'August'
      monthName[8] = 'September'
      monthName[9] = 'October'
      monthName[10] = 'November'
      monthName[11] = 'December'
      var todayExplicit = weekDayName[weekDay] + ', ' + monthName[month] + ' ' + day
      return todayExplicit
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
