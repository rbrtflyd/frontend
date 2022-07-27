<template>
  <div class="flex flex-col">
        <div class="flex flex-row items-center justify-between px-6 py-4 text-sm bg-white">
            <div class="font-semibold">
                {{title}}
            </div>
            <div class="flex flex-row items-center gap-x-2" v-if="context == 'Intake'">
                <t-button>Vital Signs</t-button>
                <t-button>Social Hx</t-button>
                <t-button>PMHx</t-button>
                <t-button>Surgical History</t-button>
                <t-button>Chief Complaint</t-button>
                <t-button>Complete</t-button>
            </div>
            <div v-else class="text-base font-bold"> 
                <span>Progress Note</span>
            </div>
            <div>
                <t-button><font-awesome-icon :icon="['far', 'times']"/></t-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FlowDetailNavigation',
    props: {
        title: String,
        context: String,
    },
    data() {
        return {
        }
    },
}
</script>

<style>

</style>