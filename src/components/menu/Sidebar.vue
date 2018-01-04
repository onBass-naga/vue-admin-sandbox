<template>
  <div class="container">
    <div v-for="item in items" :key="item.name">
      <router-link :to="item.link" role="menuitem" class="item-container">
        <div>
          <div style="margin-left: 0px; padding: 0px 16px 0px 72px; position: relative;">
            <!-- <img class="icon" :src="item.icon" width="20" height="20"> -->
            <div>{{ item.name }}</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data: function () {
    return {
      items: [
        { name: 'Dashboard', icon: require('@/assets/images/apple.svg'), link: {name: 'NotFound'} },
        { name: 'Customers', icon: require('@/assets/images/apple.svg'), link: {name: 'Customers'} },
        { name: 'Segments', icon: require('@/assets/images/apple.svg'), link: {name: 'NotFound'} },
        { name: 'Orders', icon: require('@/assets/images/apple.svg'), link: {name: 'NotFound'} },
        { name: 'Posters', icon: require('@/assets/images/apple.svg'), link: {name: 'NotFound'} },
        { name: 'Categories', icon: require('@/assets/images/apple.svg'), link: {name: 'NotFound'} },
        { name: 'Reviews', icon: require('@/assets/images/apple.svg'), link: {name: 'NotFound'} },
        { name: 'Configuration', icon: require('@/assets/images/apple.svg'), link: {name: 'NotFound'} },
        { name: 'Logout', icon: require('@/assets/images/apple.svg'), link: {name: 'NotFound'} }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start; 
  height: 100%;
}
.inner-container {
  color: rgba(0, 0, 0, 0.87); 
  background-color: rgb(0, 188, 212); 
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; 
  box-sizing: border-box; 
  font-family: Roboto, sans-serif; 
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; 
  border-radius: 0px; 
  position: relative; 
  z-index: 1100; 
  width: 100%; 
  display: flex; 
  padding-left: 24px; 
  padding-right: 24px;
}
.item-container {
  border: 10px; 
  box-sizing: border-box; 
  display: block; 
  font-family: Roboto, sans-serif; 
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
  cursor: pointer; 
  text-decoration: none; 
  margin: 0px; 
  padding: 0px; 
  outline: none; 
  font-size: 16px; 
  font-weight: inherit; 
  position: relative; 
  color: rgba(0, 0, 0, 0.87); 
  line-height: 48px; 
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; 
  min-height: 48px; 
  white-space: nowrap; 
  background: none;
}
.icon {
  display: block;
  color: rgba(0, 0, 0, 0.87);
  fill: rgb(117, 117, 117);
  height: 24px;
  width: 24px;
  user-select: none;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 0px;
  margin: 12px;
  left: 4px;
}

.item-container:hover {
  background-color: aliceblue;
}
</style>
