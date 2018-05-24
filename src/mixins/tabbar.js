import wepy from 'wepy'
// import { IS_POSTGRADUATE } from 'utils/constant'
// import db from 'utils/db'

export default class tabbar extends wepy.mixin {
  data = {
    tabbar: {}
  }

  onShow() {
    console.log('updateTabBar onShow')
    this.updateTabBar()
  }

  onLoad() {
    console.log('updateTabBar onLoad')
  }
  methods = {
  }

  updateTabBar () {
    let tabbar = this.$parent.globalData.tabbar
    let pagePath = this.$wxpage.route
    if (pagePath.indexOf('/') !== 0) {
      pagePath = '/' + pagePath
    }
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false
      if (('/pages/' + tabbar.list[i].pagePath) === pagePath) {
        tabbar.list[i].selected = true
      }
    }
    this.tabbar = tabbar
    this.$apply()
  }
}
