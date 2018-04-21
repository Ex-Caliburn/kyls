import wepy from 'wepy'

const set = (key, value) => {
  return wepy.setStorageSync(key, value)
}

const get = (key) => {
  return wepy.getStorageSync(key)
}

module.exports = {
  set,
  get
}
