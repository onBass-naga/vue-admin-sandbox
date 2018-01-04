<template>
  <div class="container">
    <div class="inner-container">
      <button tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 8px 8px 0px -16px; padding: 12px; outline: none; font-size: 0px; font-weight: inherit; position: relative; overflow: visible; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; width: 48px; height: 48px; background: none;">
        <div>
          <svg viewBox="0 0 24 24" style="display: inline-block; color: rgb(255, 255, 255); fill: rgb(255, 255, 255); height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </div>
      </button>
      <h1 style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0px; padding-top: 0px; letter-spacing: 0px; font-size: 24px; font-weight: 400; color: rgb(255, 255, 255); height: 64px; line-height: 64px; flex: 1 1 0%;">Posters Galore Admin</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.container {
  display: flex;
  min-height: 0;
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
</style>
