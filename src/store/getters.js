import _ from 'lodash'

// コンポーネントが利用しやすい形に整えた情報を渡す。
export default {
  double: state => state.count * 2,
  customers: state => () => {
    return _.map(state.customers, c => {
      return {
        id: c.id,
        email: c.email,
        name: `${c.firstName} ${c.lastName}`,
        birthday: c.birthday
      }
    })
  },
  customer: state => id => {
    return _.find(state.customers, c => c.id === id)
  }
}
