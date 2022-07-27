<template>
  <Layout>
      <div class="container py-4 style-guide">
      <h1 class="mt-6 mb-6 text-3xl font-bold"> Style Guide</h1>
      <div class="style-guide--section">
        <h3 class="style-guide--heading"> Buttons</h3>
        <div class="flex flex-row items-center justify-between">
          <t-button>Default Button</t-button>
          <t-button variant="primary">Primary Button</t-button>
          <t-button variant="secondary">Secondary Button</t-button>
          <t-button variant="link">Link</t-button>
          <t-button variant="destructive">Destructive Button</t-button>
          <t-button variant="icon"><font-awesome-icon :icon="['fas', 'microphone']" class="animate-pulse"/></t-button>
          <t-button variant="buttonXl"> <span class="mr-2 font-semibold">Next</span><span>John Doe</span> </t-button>
        </div>
      </div>
      <div class="style-guide--section">
        <h3 class="style-guide--heading"> Cards</h3>
        <div class="flex flex-row flex-wrap justify-between">
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
          <t-card>
            <template #header>
              <div><span class="mr-3 font-bold">9:45 AM</span></div>
            </template>
            <div class="flex flex-row items-center justify-between">
              <t-tag variant="apptType">
                Last Appointment
              </t-tag>
            </div>
            <div class="mt-6 text-lg">
              <h3 class="mb-2 font-bold">12 Apr 2020</h3>
            </div>
            <div class="flex flex-row mt-9 mb-9">
                <h2 class="mb-2 font-bold text-gray-500"> Vitals </h2>
                <h2 class="mb-2 font-bold text-gray-500"> Note </h2>
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
          <t-card variant="active">
            <template #header>
              <div><span class="mr-3 font-bold">Now</span><span>Room 13</span></div>
            </template>
            <div class="flex flex-row items-center justify-between">
              <t-tag variant="apptType">
                Follow Up
              </t-tag>
              <div class="space-x-3">
                53 yo
                <t-tag variant="badge">
                  Female
                </t-tag>
                She/Her
              </div>
            </div>
            <div class="mt-6 text-lg">
              <h3 class="mb-2 font-bold">Priscilla Edwards</h3>
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
                  <t-button variant="primary">Begin</t-button><t-button> Review </t-button>
                </div>
                <div class="">
                  <t-button variant="destructive">Reschedule or Cancel</t-button>
                </div>
                </div>
            </template>
          </t-card>
          <t-card variant="bigCardActive" class="mx-auto">
            <template #header>
              <div><span class="mr-3 font-bold">Now</span><span>Room 13</span></div>
            </template>
            <div class="flex flex-row h-full">
              <div class="w-3/12 p-4 bg-white 2xl:w-1/4">
                <div class="flex flex-row items-center justify-between">
                  <t-tag variant="apptFollowUp">
                    Follow Up
                  </t-tag>
                  <div class="space-x-3">
                    53 yo
                    <t-tag variant="badge">
                      Female
                    </t-tag>
                    She/Her
                  </div>
                </div>
                <div class="mt-6 text-lg">
                  <h3 class="mb-2 font-bold">Priscilla Edwards</h3>
                  <span class="text-gray-700">Patient running a fever for 3 days, complains of headaches, fatigue, and muscle aches.</span>
                </div>
                <div class="flex flex-col pt-6 mb-40 border-t border-gray-200 mt-9">
                  <div class="w-full mb-6">
                    <h2 class="mb-2 font-bold text-gray-500"> Active Conditions </h2>
                    <div class="space-y-2">
                        <t-button variant="link">Primary Hypertension</t-button>
                        <t-button variant="link">Diabetes Mellitus</t-button>
                    </div>
                  </div>
                  <div class="w-3/4">
                    <h2 class="mb-2 font-bold text-gray-500"> Last Appointment </h2>
                    <t-button variant="enlargeButton">
                      <div class="flex flex-col items-stretch">
                        <span class="flex flex-row items-center justify-between w-full mb-3 font-bold">12 Apr 2020 <font-awesome-icon :icon="['fas', 'expand-alt']" class="text-gray-400"/></span>
                        <span> Follow Up </span>
                      </div>
                    </t-button>
                  </div>
                </div>
              </div>
              <div class="flex flex-row flex-wrap px-6 pt-12 pb-16 overflow-scroll 2xl:px-14 2xl:w-3/4 h-35">
                <div class="mb-12">
                  <h3 class="mb-6 text-xl font-semibold"> Vitals</h3>
                  <div class="grid justify-between grid-cols-5 gap-3">
                    <vital-card type="Weight" num=135 unit="lbs"/>
                    <vital-card type="Heart Rate" num=52 unit="bpm"/>
                    <vital-card type="Blood Pressure" num=125/75 unit=""/>
                    <vital-card type="Temperature" num="98.6" unit="F"/>
                    <vital-card type="Sp02" num="99" unit="%"/>
                    <vital-card type="Height" num="56" unit="in"/>
                    <vital-card type="Length" num="28" unit="in"/>
                    <vital-card type="BMI" num="25" unit=""/>
                  </div>
                </div>
                <div class="w-1/2 mb-10">
                  <span class="flex flex-row items-baseline mb-6 space-x-3">
                    <h3 class="text-xl font-semibold"> Primary Hypertension</h3>
                  </span>
                  <div class="p-4 bg-white border border-gray-200 h-44 rounded-xl">
                    Information about cause, current medication, last bp reading, etc
                  </div>
                </div>
                <div class="w-1/2 mb-10">
                  <span class="flex flex-row items-baseline mb-6 space-x-4">
                    <h3 class="text-xl font-semibold"> Diabetes Mellitus</h3>
                  </span>
                  <div class="p-4 bg-white border border-gray-200 h-44 rounded-xl">
                  </div>
                </div>
                <div class="w-full mb-12">
                  <span class="flex flex-row items-baseline mb-6 space-x-4">
                    <h3 class="text-xl font-semibold"> Allergies</h3>
                  </span>
                  <div class="bg-white border border-gray-200 h-44 rounded-xl">
                  </div>
                </div>
                <div class="w-full mb-12">
                  <span class="flex flex-row items-baseline mb-6 space-x-4">
                    <h3 class="text-xl font-semibold"> Medications</h3>
                  </span>
                  <div class="bg-white border border-gray-200 h-44 rounded-xl">
                  </div>
                </div>
                <div class="w-full mb-12">
                  <span class="flex flex-row items-baseline mb-6 space-x-4">
                    <h3 class="text-xl font-semibold"> Social History</h3>
                  </span>
                  <div class="bg-white border border-gray-200 h-44 rounded-xl">
                  </div>
                </div>
                <div class="w-full mb-12">
                  <span class="flex flex-row items-baseline mb-6 space-x-4">
                    <h3 class="text-xl font-semibold"> Medical History</h3>
                  </span>
                  <div class="bg-white border border-gray-200 h-44 rounded-xl">
                  </div>
                </div>
              </div>
            </div>
            <template #footer>
              <div class="flex flex-row justify-between">
                <div class="flex flex-row space-x-4">
                  <t-button variant="primary">Begin</t-button><t-button> Close </t-button>
                </div>
                <div class="">
                  <t-button variant="destructive">Reschedule or Cancel</t-button>
                </div>
                </div>
            </template>
          </t-card>
        </div>
        <div class="container grid grid-cols-2 gap-2 mt-7">
          <t-card variant="space" class="row-span-2">
            <a href="/appointments">
              <div class="space-title">
                <h3 class="pb-2 text-2xl">
                  Appointments
                </h3>
                <h4 class="text-xl">
                  17 Appointments
                </h4>
              </div>
              </a>
              <template v-slot:footer>
                <span> 4 New Patients, 12 Follow Ups, 1 CC </span>
              </template>
          </t-card>
        </div>
      </div>
      <div class="style-guide--section">
        <h3 class="style-guide--heading"> Vital Signs </h3>
        <div class="flex flex-row flex-wrap space-x-3">
          <vital-card type="Weight" num=135 unit="lbs"/>
          <vital-card type="Heart Rate" num=52 unit="bpm"/>
          <vital-card type="Blood Pressure" num=125/75 unit=""/>
          <vital-card type="Temperature" num="98.6" unit="F"/>
          <vital-card type="Sp02" num="99" unit="%"/>
          <vital-card type="Height" num="56" unit="in"/>
          <vital-card type="Length" num="28" unit="in"/>
          <vital-card type="BMI" num="25" unit=""/>
        </div>
      </div>
      <div class="style-guide--section">
        <h3 class="style-guide--heading"> Note Editor </h3>
        <editor/>
      </div>
    </div>
  </Layout>
</template>

<page-query>


</page-query>

<script>
import TipTap from '../components/Editor/TipTap.vue'
export default {
  components: { TipTap },
  metaInfo: {
    title: 'HealthcareOS'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.style-guide--heading {
  @apply text-xl text-gray-400 font-semibold mb-7;
}
.style-guide--section {
  @apply py-12 border-b border-gray-200;
}

</style>
