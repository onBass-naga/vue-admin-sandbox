<template>
  <div class="container">
    <app-header></app-header>
    <div class="body-container">
      <div class="body-wrapper">
        <router-view></router-view>
      </div>
      <div class="sidebar-wrapper">
        <sidebar></sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/menu/AppHeader'
import Sidebar from '@/components/menu/Sidebar'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    Sidebar
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.body-container {
  background-color: rgb(237, 236, 236);
  display: flex;
  flex: 1 1 0%;
  overflow-y: hidden;
  overflow-x: scroll;
}

.body-wrapper {
  flex: 1 1 0%;
  padding: 2em;
}

.sidebar-wrapper {
  color: rgba(0, 0, 0, 0.87); 
  background-color: rgb(255, 255, 255); 
  transition: margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; 
  box-sizing: border-box; 
  font-family: Roboto, sans-serif; 
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; 
  border-radius: 2px; 
  flex: 0 0 256px; 
  margin-left: 0px; 
  order: -1;
}
</style>
