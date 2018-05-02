import wepy from 'wepy'
import {HOST, version} from './config'
import api from './api'
import db from './db'
import { SESSION_ID, TOKEN, USER_INFO } from './constant'

export {
  submitFormId,
  uploadPics,
  login,
  post,
  request as get
}

async function login () {
  let res = await wepy.login({ timeout: 30000 })
  console.log('code', res.code)
  // code用户登录凭证（有效期五分钟）
  let wxUserInfo = await wepy.getUserInfo({ withCredentials: true })
  console.log(wxUserInfo)
  db.set(USER_INFO, wxUserInfo.userInfo)
  let thirdReturn = await post({
    apiName: 'login',
    data: {
      code: res.code,
      iv: wxUserInfo.iv,
      encryptedData: wxUserInfo.encryptedData,
      decrypt_type: 'user'
    }
  })
  wepy.$instance.globalData.userInfo = thirdReturn.data
}

async function uploadPics (data, success, fail) {
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
      let resData = res.data && JSON.parse(res.data)
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

/*
 * @:title:收集formid 用于发送模板消息
 */
function submitFormId(formId) {
  console.log('formId:' + formId)
  if (!formId || formId.indexOf('mock') > -1) {
    return
  }
  post({
    apiName: 'submitFormId',
    form_id: formId
  })
}

function request(options, onComplete) {
  console.log(wepy.$instance && wepy.$instance.globalData)
  const header = {
    'content-type': 'application/json',
    ...options.header,
    'session-id': db.get(TOKEN) || '',
    version
  }
  return new Promise((resolve, reject) => {
    wepy.request({
      url: HOST + api[options.apiName],
      data: options.data || {},
      header: header,
      method: options.method || 'GET',
      dataType: options.dataType || 'json',
      responseType: options.responseType || 'text'
    }).then(res => {
      console.log(res)
      if (+res.statusCode === 200 && +res.data.code === 0) {
        if (res.header[SESSION_ID]) {
          wepy.$instance.globalData.token = res.header[SESSION_ID]
          db.set(TOKEN, res.header[SESSION_ID])
          console.log(res.header[SESSION_ID])
        }
        resolve(res.data)
      } else if (res.data.code === 101) {
        login()
      } else {
        wepy.showToast({
          title: res.statusCode + ':  ' + res.data.data,
          icon: 'none',
          duration: 1000
        })
      }
    }, err => {
      console.log(err)
      reject(err)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function post (options, onComplete) {
  options.method = 'POST'
  return request(options, onComplete)
}
