import wepy from 'wepy'
import { redirect } from 'utils/common'

export default class navigate extends wepy.mixin {
  data = {
    isNavigate: true
  }
  navigate(url, mode = 0) {
    if (!this.isNavigate) {
      return
    }
    this.isNavigate = false
    if (url) {
      url = '/pages/' + url
      console.log(url)
    }
    switch (mode) {
      case 0:
        wepy.navigateTo({ url })
          .then((res) => {
            this.isNavigate = true
            this.$apply()
            console.log(res)
          })
          .catch(err => {
            redirect(url)
            console.log(err)
          })
        break
      case 1:
        redirect(url)
        break
      case 2:
        wepy.navigateBack({ delta: 1 })
        break
      default:
    }
  }
}
