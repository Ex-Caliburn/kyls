import wepy from 'wepy'
import { post } from '../utils/service'

export default class addFormId extends wepy.mixin {
  /*
 * 收集formid 用于发送模板消息
 */
  methods = {
    getFormId(e) {
      this.addFormId(e.detail.formId)
    }
  }

  addFormId(formId) {
    console.log('formId:' + formId)
    if (!formId || formId.indexOf('mock') > -1) {
      return
    }
    post({
      apiName: 'addFormId',
      data: {
        formId: formId
      }
    }).then((res) => {
      console.log('addFormId' + res)
    }).catch(err => {
      console.log(err)
    })
  }
}
