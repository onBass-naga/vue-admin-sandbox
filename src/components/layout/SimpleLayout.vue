<template>
  <div class="simple-layout">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'SimpleLayout'
}
</script>

<style scoped>
.simple-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 188, 212);
}
</style>
