<template>
    <a href="#" class="flex flex-col justify-between p-3 bg-white drop-shadow rounded-xl aspect-square">
        <div>
            <div class="flex w-8 h-8 mb-1 bg-orange-100 rounded-lg place-content-center"><img/></div>
            <div class="font-semibold text-slate-700">{{ name }}</div>
            <div class="text-sm text-slate-600">{{number}} {{item}}</div>
        </div>
        <div class="text-xxs text-slate-500">{{details}}</div>
    </a>
</template>

<script>
export default {
    name: 'SpaceIconCard',
    props: {
        name: String,
        imageURL: String,
        number: String,
        item: String,
        details: String,
    }
}
</script>

<style scoped>
a {
    width: 150px;
}
</style>