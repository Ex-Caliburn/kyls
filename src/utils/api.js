const school = 'school/'
const user = 'user/'
const diary = 'diary/'
const api = {
  /*
  * 登录相关
  * */
  'login': 'wx/login',
  /*
  * 信息录入更新
  * */
  graduateRegister: user + 'postgraduateRegister',
  undergraduateRegister: user + 'undergraduateRegister',
  updateUserInfo: user + 'updateUserInfo',
  /*
  * 研究生列表信息 根据询问问题类型
  * */
  getMedalAward: 'medal/getMedalAward',
  getUserMedal: 'medal/getUserMedal',
  getUserMessage: 'message/getUserMessage',
  readMessage: 'message/readMessage', // /message/readMessage 请求方式：GET 参数：{"id":1} 返
  getPostgraduateInfo: user + 'getPostgraduateInfo',
  /*
  * 支付
  * */
  wxNotify: '/pay/wxNotify', // get
  order: '/pay/order', // POST{ "userId":1, "amount"1 } ##返回参数 { "prepay_id":"122121" }
  /*
  * 操作类上传
  * */
  share: 'share/share',
  upload: '/upload/image',
  setUserPhone: '/wx/setUserPhone', // post setUserPhone
  addFormId: user + 'addFormId',
  sendMessage: user + 'sendMessage',
  addUserComplain: user + 'addUserComplain',
  addFeedback: user + 'addFeedback',
  addPostGraduateQuestionInfo: user + 'addPostgraduteQuestionInfo',
  /*
  * 日记
  * */
  getDiaryList: diary + 'diaryList',
  addDiary: diary + 'addDiary',
  editDiary: diary + 'editDiary',
  /*
  * 问答
  * */
  questionSubmit: 'question/submit',
  answerQuestion: 'answer/answerQuestion',
  viewQuestion: 'question/viewQuestion', // 问题一览 （浏览悬赏问题）
  getOfferQuestions: 'question/getOfferQuestions', // 获取悬赏问题列表并根据发布时间排序
  /*
  * 学校相关数据
  * */
  getScienceInfoByType: school + 'getScienceInfoByType',
  getPostgraduateSchool: school + 'getPostgraduateSchool',
  getPostgraduateMajor: school + 'getPostgraduateMajor',
  getUndergraduateSchool: school + 'getUndergraduateSchool',
  getUndergraduateMajor: school + 'getUndergraduateMajor'
}

export default api
