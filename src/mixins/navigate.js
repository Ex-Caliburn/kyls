import wepy from 'wepy'

export default class navigate extends wepy.mixin {
  navigate (url) {
    console.log(url)
    wepy.navigateTo({
      url
    }).then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
