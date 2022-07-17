import storage from './storage'
// const key = 'userToken'
export const getToken = (key) => storage.get(key)
export const setToken = (key, token) => storage.set(key, token)
export const removeToken = (key) => storage.remove(key)
