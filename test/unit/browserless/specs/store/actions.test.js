/**
 * このテストのみを行う場合は下記コマンドで実行
 * $ ./node_modules/mocha-webpack/bin/mocha-webpack --webpack-config build/webpack.test.conf.js test/unit/browserless/specs/store/actions.test.js
 */
import assert from 'power-assert'
import store from '@/store'

describe('actions.js', () => {
  it('#increment', () => {
    store.dispatch('increment')
    const expected = 2
    const actual = store.state.count
    assert(expected === actual)
  })

  it('#findCustomers', async function () {
    const result = await store.dispatch('findCustomers')
    const customers = store.getters.customers()

    assert(3 === customers.length)
    assert('Cornelia Bryant' === customers[0].name)
    assert('1980/09/13' === customers[0].birthday)
  })
})
