<template>
  <div class="container">
    <button 
        :tabindex="tabindex" 
        :type="type" 
        @click="() => onClick()" 
        :disabled="isLoading">
      <div>
        <div class="label-wrapper">
          <span>{{ isLoading ? "loading..." : label }}</span>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LoadingButton',
  props: {
    type: {
      type: String,
      default: 'submit'
    },
    label: {
      type: String,
      default: 'push'
    },
    tabindex: {
      type: Number,
      default: -1
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    showLabel () {
      return !this.stateValue || this.stateValue.length < 1
    }
  }
}
</script>

<style scoped>
.container {
  color: rgba(0, 0, 0, 0.87); 
  background-color: rgb(255, 255, 255); 
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; 
  box-sizing: border-box; 
  font-family: Roboto, sans-serif; 
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; 
  border-radius: 2px; 
  display: inline-block; 
  min-width: 100%; 
  margin-right: 8px;
}

.label-wrapper {
  height: 36px; 
  border-radius: 2px; 
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; 
  top: 0px;
}

span {
  position: relative; 
  opacity: 1; 
  font-size: 14px; 
  letter-spacing: 0px; 
  text-transform: uppercase; 
  font-weight: 500; 
  margin: 0px; 
  user-select: none; 
  padding-left: 16px; 
  padding-right: 16px; 
  color: rgb(255, 255, 255);
}

button {
  border: 10px; 
  box-sizing: border-box; 
  display: inline-block; 
  font-family: Roboto, sans-serif; 
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
  cursor: pointer; 
  text-decoration: none; 
  margin: 0px; 
  padding: 0px; 
  outline: none; 
  font-size: inherit; 
  font-weight: inherit; 
  position: relative; 
  height: 36px; 
  line-height: 36px; 
  width: 100%; 
  border-radius: 2px; 
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; 
  background-color: rgb(0, 188, 212); 
  text-align: center;
}
</style>
