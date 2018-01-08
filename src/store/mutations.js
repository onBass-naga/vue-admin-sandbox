
import _ from 'lodash'
import moment from 'moment'
import { camelCase } from 'change-case-object'

export default {
  increment (state) {
    state.count++
  },
  updateCustomers (state, payload) {
    state.customers = _.map(payload.customers, customer => {
      const c = camelCase(customer)
      c.birthday = moment(c.birthday).format('YYYY/MM/DD')
      return c
    })
  },
  updateCustomer (state, payload) {
    const customer = payload.customer
    const index = _.findIndex(state.customers, c => c.id === customer.id)
    state.customers[index] = customer
  },
  removeCustomer (state, payload) {
    const customerId = payload.id
    const index = _.findIndex(state.customers, c => c.id === customerId)
    state.customers.splice(index, 1)
  }
}
