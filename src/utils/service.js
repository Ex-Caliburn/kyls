import wepy from 'wepy'
import config from './config'
import api from './api'
import db from './db'
import {TOKEN, SESSION_ID} from './constant'

function request(options, onComplete) {
  console.log(wepy.$instance && wepy.$instance.globalData)
  const header = {
    'content-type': 'application/json',
    ...options.header,
    'session-id': db.get(TOKEN) || '',
    version: config.version
  }
  return new Promise((resolve, reject) => {
    wepy.request({
      url: config.HOST + api[options.apiName],
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
        }
        resolve(res.data)
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

export {
  post,
  request as get
}
