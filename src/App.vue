<template>
  <div id="app">
    <simple-layout v-if="isSimple"></simple-layout>
    <default-layout v-else></default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/components/layout/DefaultLayout'
import SimpleLayout from '@/components/layout/SimpleLayout'

const SimpleLayoutNames = ['Login']

export default {
  name: 'app',
  components: {
    SimpleLayout,
    DefaultLayout
  },
  computed: {
    isSimple () {
      return SimpleLayoutNames.includes(this.$route.name)
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
