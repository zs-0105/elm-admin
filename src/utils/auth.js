// import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return sessionStorage.getItem('token')
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey,token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}
