<template>
  <div >
    <global-navigation/>
    <slot class="container"></slot>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import GlobalNavigation from '../components/Navigation/GlobalNavigation.vue'

export default {
  components: {
    GlobalNavigation
}
}
</script>

<style>

</style>
