<template>
  <div class="flex flex-col items-center w-full h-screen place-content-center">
    <h1 class="text-xl font-bold ">Welcome to HealthcareOS</h1>
    <t-button variant="primaryGreen" to="/launchpad">Start</t-button>
  </div>
</template>

<page-query>


</page-query>

<script>
export default {
  components: {},
  metaInfo: {
    title: "HealthcareOS",
  },
  name: "Home",
  data() {
    return {};
  },
  created() {},
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
