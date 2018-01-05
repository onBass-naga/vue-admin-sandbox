
import _ from 'lodash'
import { camelCase } from 'change-case-object'

export default {
  increment (state) {
    state.count++
  },
  updateCustomers (state, payload) {
    state.customers = _.map(payload.customers, c => camelCase(c))
  }
}
