/**
 * 常量
 */
const avatarUrl = 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKPPSrzVYf4q4Xs0t70It4l6s6s5J7pCSia2n8GibweNuE3n48GsPM4KzYnv4nItRwczJVFTogHMYDg/0'
const TOKEN = 'token'
const SESSION_ID = 'session-id'

const IS_POSTGRADUATE = 'isPostgraduate'
const USER_INFO = 'userInfo'

const PHONE_RULE = /^(0|86|17951)?(1[0-9][0-9])([0-9]{8})$/
const CODE_RULE = /^\d{6}$/
const NUM_RULE = /^\d+$/
const EMAIL_RULE = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
const ID_RULE = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
const CN_RULE = /[\u4E00-\u9FA5]/g
const NAME_RULE = /^[a-zA-Z0-9_-]{4,16}$/ // 用户名正则

const SYSTEM_INFO = 'systemInfo'

export {
  avatarUrl,
  TOKEN,
  SESSION_ID,
  IS_POSTGRADUATE,
  USER_INFO,
  SYSTEM_INFO,
  PHONE_RULE,
  CODE_RULE,
  EMAIL_RULE,
  ID_RULE,
  CN_RULE,
  NAME_RULE,
  NUM_RULE
}
