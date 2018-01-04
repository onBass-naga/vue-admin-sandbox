
import mockResponse from './response'
import _ from 'lodash'

const findMock = (method, path, body) => {
  // TODO: クエリストリングなどが付与しても対応できるようにする
  const key = path.replace('/', '')
  const found = mockResponse[key]

  const condition = { method, path, body }
  return _.find(found, r => r.default.isMatched(condition))
}

const result = (mock) => {
  return new Promise((resolve, reject) => {
    if (mock.statusCode && mock.statusCode >= 400) {
      reject(new Error('TODO: response.error'))
    } else {
      resolve(mock.default.response)
    }
  })
}

export default {
  get: (path) => {
    const mock = findMock('get', path)
    return result(mock)
  },
  post: (path, body) => {
    const mock = findMock('get', path, body)
    return result(mock)
  }
}
