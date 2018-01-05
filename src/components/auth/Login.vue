<template>
  <div class="login">
    <div style="padding-bottom: 0px;">
      <div style="margin: 1em; text-align: center;">
        <div size="60" style="color: rgb(255, 255, 255); background-color: rgb(255, 64, 129); user-select: none; display: inline-flex; align-items: center; justify-content: center; font-size: 30px; border-radius: 50%; height: 60px; width: 60px;">
          <svg viewBox="0 0 24 24" style="display: inline-block; color: rgb(255, 255, 255); fill: rgb(255, 255, 255); height: 36px; width: 36px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; font-size: 36px; margin: 12px;">
            <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path>
          </svg>
        </div>
      </div>
      <form @submit.prevent>
        <div style="padding: 0px 1em 1em;">
          <p style="text-align: center; margin-top: 1em; color: rgb(204, 204, 204);">Hint: demo / demo</p>
          <text-field 
              label="Username" 
              name="username" 
              :on-change="val => usrenameChanged(val)" 
              :value="usrename"></text-field>
          <text-field 
              label="Password" 
              name="password" 
              type="password"
              :on-change="val => passwordChanged(val)" 
              :value="password"></text-field>
        </div>
        <div style="padding: 8px; position: relative;">
          <loading-button
            label="SIGN IN"
            :is-loading="isLoading"
            :on-click="() => login()"></loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import TextField from '@/components/shared/form_control/TextField'
import LoadingButton from '@/components/shared/button/LoadingButton'
import httpClient from '#mockable#/httpClient'
import { setAccessToken } from '@/utils/auth'

export default {
  name: 'Login',
  components: {
    TextField,
    LoadingButton
  },
  data () {
    return {
      usrename: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    usrenameChanged (val) {
      console.log(val)
      this.usrename = val
    },
    passwordChanged (val) {
      console.log(val)
      this.password = val
    },
    login () {
      if (this.hasError()) {
        // reject(new Error('invalid inputs'))
        return
      }
      
      const requestBody = {
        username: this.usrename,
        password: this.password
      }
      httpClient.post('/login', requestBody).then(response => {
        setAccessToken(response.data.access_token)
        this.isLoading = false
        
        const redirectPath = _.get(this.$router, `history.current.query.redirect`)
        if (redirectPath) {
          this.$router.push(redirectPath)  
        } else {
          this.$router.push({ name: 'Top' })
        }
      }, error => {
        console.log(error)
        this.isLoading = false
      })

      this.isLoading = true
    },
    hasError () {
      console.log(`usrename: ${this.usrename}, password: ${this.password}`)
      return false
    }
  }
}
</script>

<style scoped>
.login {
  color: rgba(0, 0, 0, 0.87); 
  background-color: rgb(255, 255, 255); 
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; 
  box-sizing: border-box; 
  font-family: Roboto, sans-serif; 
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; 
  border-radius: 2px; 
  z-index: 1; 
  min-width: 300px;
}
</style>
