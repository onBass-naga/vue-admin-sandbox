
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
  }
}
