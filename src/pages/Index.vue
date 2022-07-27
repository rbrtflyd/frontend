<template>
  <div class="flex flex-col items-center w-full h-screen place-content-center">
    <h1 class="text-xl font-bold ">Welcome to HealthcareOS</h1>
    <t-button variant="primary" to="/launchpad">Start</t-button>
  </div>
</template>

<page-query>


</page-query>

<script>

export default {
  components: { 
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
