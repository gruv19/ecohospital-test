<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
<script>

export default {
  name: 'App',
  async mounted() {
    if (!this.$store.state.imei) {
      await this.$store.dispatch('getFingerPrint');
    }
  },
}
</script>
