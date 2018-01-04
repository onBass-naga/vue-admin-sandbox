import _ from 'lodash'
import moment from 'moment'

// コンポーネントが利用しやすい形に整えた情報を渡す。
export default {
  double: state => state.count * 2,
  customers: state => {
    return _.map(state.customers, c => {
      return {
        id: c.id,
        email: c.email,
        name: `${c.firstName} ${c.lastName}`,
        birthday: moment(c.birthday).format('YYYY/MM/DD')
      }
    })
  }
}
