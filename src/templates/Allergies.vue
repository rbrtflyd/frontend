<template>
    <Layout>
        <h1> {{$page.patient.name}}</h1>
        <h2>{{$page.patient.mrn}}</h2>
    </Layout>
</template>
<script>

import Layout from "~/layouts/Default.vue";

export default {
    components: {
        Layout,
    },
    metaInfo() {
        return {
            title: this.$page.patient.name,
        }
    }
}

</script>


<page-query>

query Patient ($id: ID!) {
    patient: patient(id:$id) {
        id
        name
        mrn
    }
}
</page-query>


<style>

</style>