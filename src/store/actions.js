
import { snakeCase } from 'change-case-object'
import moment from 'moment'
import httpClient from '#mockable#/httpClient'

export default {
  increment ({ commit }) {
    commit('increment')
  },
  asyncIncrement ({ commit }, waitTimeSec) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, waitTimeSec * 1000)
    })
  },
  findCustomers ({ commit }) {
    return new Promise((resolve, reject) => {
      httpClient.get('/customers').then(response => {
        commit('updateCustomers', { customers: response.data })
        resolve()
      }, error => {
        reject(error)
      })
    })
  },
  updateCustomer ({ commit }, customer) {
    return new Promise((resolve, reject) => {
      const requestBody = snakeCase(customer)
      requestBody.birthday = customer.birthday 
          ? moment(customer.birthday, 'YYYY/MM/DD').format()
          : customer.birthday 
      httpClient.put(`/customers/${customer.id}`, requestBody).then(response => {
        commit('updateCustomer', { customer: customer })
        resolve()
      }, error => {
        reject(error)
      })
    })
  },
  removeCustomer ({ commit }, customerId) {
    return new Promise((resolve, reject) => {
      httpClient.delete(`/customers/${customerId}`).then(response => {
        commit('removeCustomer', { id: customerId })
        resolve()
      }, error => {
        reject(error)
      })
    })
  }
}
