import wepy from 'wepy'

export default class navigate extends wepy.mixin {
  navigate(url, mode = 0) {
    if (url) {
      url = '/pages/' + url
      console.log(url)
    }
    switch (mode) {
      case 0:
        wepy.navigateTo({ url })
          .then((res) => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
        break
      case 1:
        wepy.redirectTo({ url })
          .then((res) => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
        break
      case 2:
        wepy.navigateBack({ delta: 1 })
        break
      default:
    }
  }
}
