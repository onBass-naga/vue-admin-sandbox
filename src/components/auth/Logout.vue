<template>
  <div class="logout">
  </div>
</template>

<script>
import { removeToken } from '@/utils/auth'

export default {
  name: 'Logout',
  created: function () {
    console.log('logout')
    removeToken()
    this.$router.push({ name: 'Login' })
  }
}
</script>

<style scoped>

</style>
