import wepy from 'wepy'

export default class tabbar extends wepy.mixin {
  data = {
    tabbar: {}
  }

  onShow() {
    console.log('updateTabBar onShow')
    this.updateTabBar()
  }

  updateTabBar () {
    let tabbar = this.$parent.globalData.tabbar
    let pagePath = this.$wxpage.route
    if (pagePath.indexOf('/') !== 0) {
      pagePath = '/' + pagePath
    }
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false
      if (tabbar.list[i].pagePath === pagePath) {
        tabbar.list[i].selected = true
      }
    }
    this.tabbar = tabbar
    this.$parent.globalData.tabbar = tabbar
    this.$apply()
  }

}
