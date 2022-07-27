<template>
  <router-view class="h-screen" />
</template>
<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import GlobalNavigation from "./components/Navigation/GlobalNavigation.vue";
export default {
  components: { GlobalNavigation },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$static.metadata.siteDescription,
        },
      ],
    };
  },
};
</script>

<style></style>
