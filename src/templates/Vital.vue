<template>
    <Layout>
        <h1>Vitals {{$page.encounter.time | luxon}}</h1>
        {{$page.encounter.vitals.weight}}
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
query ($id: ID!) {
    encounter (id: $id) {
        id
        time
        vitals {
            weight
        }
    }
}
</page-query>


<style>

</style>