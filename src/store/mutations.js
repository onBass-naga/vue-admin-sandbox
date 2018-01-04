
export default {
  increment (state) {
    state.count++
  },
  updateCustomers (state, payload) {
    state.customers = payload.customers
  }
}
