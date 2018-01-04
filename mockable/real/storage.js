
export default {
  get: (key) => {
    return localStorage.getItem(key)
  },
  set: (key, value) => {
    localStorage.setItem(key, value)
    console.log(localStorage.getItem(key))
  },
  clear: (key) => {
    localStorage.removeItem(key)
  }
}
