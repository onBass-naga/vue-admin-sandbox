
const strage = {}

export default {
  get: (key) => {
    console.log(`get key: ${key}: ${JSON.stringify(strage)}`)
    return strage[key]
  },
  set: (key, value) => {
    strage[key] = value
    console.log(JSON.stringify(strage))
  },
  clear: (key) => {
    delete strage[key]
    console.log(JSON.stringify(strage))
  }
}
