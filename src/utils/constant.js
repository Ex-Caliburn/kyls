/**
 * 常量
 */
const LOVE = '../../icon/my/love.svg'
const UNLOVE = '../../icon/my/love1.svg'
const QRCode = 'https://kyls-test.oss-cn-hangzhou.aliyuncs.com/image/2018/5/7/ac7565d809334b0385ab57481cb11aa7.jpg'
const avatarUrl = 'https://kyls-test.oss-cn-hangzhou.aliyuncs.com/image/2018/5/7/d3c9bf9d42ee4d2f95d2d838e918bcd1.jpg'
const TOKEN = 'token'
const SESSION_ID = 'session-id'

const IS_POSTGRADUATE = 'isPostgraduate'
const USER_INFO = 'userInfo'

const PHONE_RULE = /^(0|86|17951)?(1[0-9][0-9])([0-9]{8})$/
const CODE_RULE = /^\d{6}$/
const NUM_RULE = /^\d+$/
const EMAIL_RULE = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
const ID_RULE = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
const CN_RULE = /^[\u4E00-\u9FA5]/g
const NAME_RULE = /^[a-zA-Z0-9_-]{4,16}$/ // 用户名正则

const SYSTEM_INFO = 'systemInfo'

export {
  UNLOVE,
  LOVE,
  QRCode,
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
