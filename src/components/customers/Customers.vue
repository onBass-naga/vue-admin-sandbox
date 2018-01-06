<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
export default {
  name: 'Customers',
  beforeCreate: function () {
    this.$store.dispatch('findCustomers')
  }
}
</script>

<style scoped>
</style>
