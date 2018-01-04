import decode from 'jwt-decode'
import storage from '#mockable#/storage'

const ID_TOKEN_KEY = 'ID_TOKEN'
const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN'

export function removeToken () {
  clearIdToken()
  clearAccessToken()
}

export function getIdToken () {
  return storage.get(ID_TOKEN_KEY)
}

export function getAccessToken () {
  return storage.get(ACCESS_TOKEN_KEY)
}

function clearIdToken () {
  storage.clear(ID_TOKEN_KEY)
}

function clearAccessToken () {
  storage.clear(ACCESS_TOKEN_KEY)
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName (name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}

// Get and store access_token in local storage
export function setAccessToken (accessToken) {
//   let accessToken = getParameterByName('access_token')
  storage.set(ACCESS_TOKEN_KEY, accessToken)
}

// Get and store id_token in local storage
export function setIdToken () {
  let idToken = getParameterByName('id_token')
  storage.set(ID_TOKEN_KEY, idToken)
}

export function isLoggedIn () {
  const accessToken = getAccessToken()
  return !!accessToken && !isTokenExpired(accessToken)
}

function getTokenExpirationDate (encodedToken) {
  const token = decode(encodedToken)
  if (!token.exp) { return null }

  const date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}

function isTokenExpired (token) {
  const expirationDate = getTokenExpirationDate(token)
  return expirationDate < new Date()
}
