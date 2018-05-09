import wepy from 'wepy'

export default class reachBottom extends wepy.mixin {
  config = {
    window: {
      enableOnReachBottom: true
    }
  }
  data = {
    pageSize: 10,
    pageNum: 1
  }

  onReachBottom() {
    this.pageNum += 10
    this.$apply()
    this.fetchDate()
  }
}
