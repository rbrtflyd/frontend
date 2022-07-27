<template>
  <div class="p-6 w-sidebar">
    <div class="px-6 py-4 bg-white border border-slate-200 rounded-xl">
        <span class="text-xl font-bold">{{patientName}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PatientSidebar',
    props: {
        patientName: String,

    }

}
</script>

<style>

</style>