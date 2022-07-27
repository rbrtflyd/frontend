<template>
    <div>
    <t-card>
        <template #header>
            <div><span class="mr-3 font-bold">9:45 AM</span></div>
        </template>
        <div class="flex flex-row items-center justify-between">
            <t-tag variant="apptType">
            New Patient
            </t-tag>
            <div class="space-x-2">
            53 yo
            <t-tag variant="badge">
                Female
            </t-tag>
            She/Her
            </div>
        </div>
        <div class="mt-6 text-lg">
            <h3 class="mb-2 font-bold">Brandie Fisher</h3>
            <span class="text-gray-700">Patient running a fever for 3 days, complains of headaches, fatigue, and muscle aches.</span>
        </div>
        <div class="flex flex-row pt-6 border-t border-gray-200 mt-9 mb-9">
            <div class="w-1/2">
            <h2 class="mb-2 font-bold text-gray-500"> Active Conditions </h2>
            <div class="space-y-2">
                <t-button variant="link">Primary Hypertension</t-button>
                <t-button variant="link">Diabetes Mellitus</t-button>
            </div>
            </div>
            <div class="w-1/2">
            <h2 class="mb-2 font-bold text-gray-500"> Last Appointment </h2>
            <t-button variant="enlargeButton">
                <div class="flex flex-col items-stretch">
                <span class="flex flex-row items-center justify-between w-full mb-3 font-bold">12 Apr 2020 <font-awesome-icon :icon="['fas', 'expand-alt']" class="text-gray-400"/></span>
                <span> Follow Up </span>
                </div>
            </t-button>
            </div>
        </div>
        <template #footer>
            <div class="flex flex-row justify-between">
            <div class="flex flex-row space-x-4">
                <t-button> Review </t-button>
            </div>
            <div class="">
                <t-button variant="destructive">Reschedule or Cancel</t-button>
            </div>
            </div>
        </template>
    </t-card>
    </div>
</template>

<script>
export default {
    name: 'ModuleCard',
    components: {
        ModuleCard
    }
}
</script>

<style>

</style>