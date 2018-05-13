import wepy from 'wepy'
import { HOST, version } from './config'
import api from './api'
import db from './db'
import { IS_POSTGRADUATE, SESSION_ID, TOKEN, USER_INFO } from './constant'

export {
  getPhoneNumber,
  share,
  createPayOrder,
  addFormId,
  uploadPics,
  login,
  post,
  request as get
}

async function login() {
  let res = await wepy.login({ timeout: 30000 })
  console.log('code', res, res.code)
  // code用户登录凭证（有效期五分钟）
  let wxUserInfo = await wepy.getUserInfo({ withCredentials: true })
  console.log(wxUserInfo)
  db.set('wxUserInfo', wxUserInfo.userInfo)
  post({
    apiName: 'login',
    data: {
      code: res.code,
      iv: wxUserInfo.iv,
      encryptedData: wxUserInfo.encryptedData,
      decrypt_type: 'user'
    }
  }).then(res => {
    db.set(USER_INFO, res)
    let isPostgraduate = res.userType > 1
    if (res.userType) {
      // todo 对于游客的处理
      // wepy.navigateTo({ url: '/chooseInterest' })
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    }
    wepy.$instance.globalData[IS_POSTGRADUATE] = isPostgraduate
    db.set(IS_POSTGRADUATE, isPostgraduate)
    wepy.$instance.globalData.userInfo = res
  }).catch(err => {
    wepy.showToast({
      title: JSON.stringify(err),
      icon: 'none',
      duration: 1000
    })
    console.log(err)
  })
}

async function uploadPics(data, success, fail) {
  try {
    let res = await wepy.uploadFile({
      url: HOST + 'upload/image',
      filePath: data,
      header: {
        'session-id': db.get(TOKEN) || ''
      },
      name: 'file',
      formData: {
        file: data
      }
    })
    try {
      let resData = res && JSON.parse(res)
      if (res.statusCode === 200 && resData.code === 0) {
        success && success(resData.data)
      } else {
        fail && fail(resData.data)
      }
    } catch (err) {
      console.log(err)
    }
  } catch (err) {
    console.log(err)
  }
}

function getPhoneNumber (iv, encryptedData) {
  try {
    post({
      apiName: 'setUserPhone',
      data: {iv, encryptedData}
    }).then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  } catch (err) {
    console.log(err)
  }
}

/*
 * 收集formid 用于发送模板消息
 */
function addFormId(formId) {
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

function share(shareTickets) {
  request({
    apiName: 'share',
    data: {
      shareTickets
    }
  })
    .then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
  })
}

function createPayOrder(courseID, onSuccess, onFail, onComplete) {
  const that = this
  const fail = (errType, errMsg, errText) => {
    typeof onFail === 'function' && onFail({
      errType,
      errMsg,
      errText: errText || errMsg
    })
  }

  this.requestGet('user/order/create', { course_id: parseInt(courseID) },
    (data) => {
      this.util.hideToast()
      wx.requestPayment({
        timeStamp: data.timeStamp,
        nonceStr: data.nonceStr,
        package: data.package,
        signType: data.signType,
        paySign: data.paySign,
        success: (res) => {
          typeof onSuccess === 'function' && onSuccess(data.orderNo)
        },
        fail: (res) => {
          if (res.errMsg.indexOf('requestPayment:fail cancel') === -1) {
            fail('wx', '微信支付接口调用失败')
          } else {
            fail('cancel', '用户取消支付')
          }
        }
      })
    },
    (jdkErr) => {
      this.util.hideToast()
      if (jdkErr.errType === 'code') {
        switch (jdkErr.errMsg) {
          case 417:
            fail('code', '该课程不是收费课程', jdkErr.errText)
            break
          case 418:
            fail('code', `418(${jdkErr.errText})`, jdkErr.errText)
            break
          case 420:
            fail('code', '已支付过该课程', jdkErr.errText)
            break
          case 421:
            fail('code', '不在支付时间内', jdkErr.errText)
            break
          default:
            fail('code', jdkErr.errMsg, jdkErr.errText)
        }
      } else {
        fail(jdkErr.errType, jdkErr.errMsg, jdkErr.errText)
      }
    },
    onComplete
  )
}

function request(options, onComplete) {
  const header = {
    'content-type': 'application/json',
    ...options.header,
    'session-id': db.get(TOKEN) || '',
    version
  }
  return new Promise((resolve, reject) => {
    let userId = wepy.$instance.globalData.userInfo.userId || (db.get(USER_INFO) && db.get(USER_INFO).userId)
    if (options.data) {
      options.data.userId = userId
    }
    wepy.request({
      url: HOST + api[options.apiName],
      data: options.data || {userId},
      header: header,
      method: options.method || 'GET',
      dataType: options.dataType || 'json',
      responseType: options.responseType || 'text'
    }).then(res => {
      console.log(res, api[options.apiName])
      if (+res.statusCode === 200 && +res.data.code === 0) {
        if (res.header[SESSION_ID]) {
          wepy.$instance.globalData.token = res.header[SESSION_ID]
          db.set(TOKEN, res.header[SESSION_ID])
          console.log(res.header[SESSION_ID])
        }
        resolve(res.data.data)
      } else if (res.data.code === 101) {
        login()
      } else {
        console.log(res.statusCode + ':  ' + res.data.data + ', ' + res.data.error)
        // wepy.showToast({
        //   title: res.statusCode + ':  ' + res.data.data,
        //   icon: 'none',
        //   duration: 1000
        // })
        reject(res.data.error)
      }
    }, err => {
      console.log(err, api[options.apiName])
      reject(err)
    }).catch(err => {
      reject(err)
    })
  })
}

function post(options, onComplete) {
  options.method = 'POST'
  return request(options, onComplete)
}
