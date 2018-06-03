import wepy from 'wepy'

export default class shareApp extends wepy.mixin {
  onShareAppMessage (res) {
    return {
      title: '考研里手',
      path: '/pages/enter',
      success (res) {
        // 转发成功
        console.log(res)
      },
      fail: function(res) {
        // 转发失败
      }
    }
  }
}
