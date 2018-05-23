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
  updatePostgraduateUserInfo: user + 'updatePostgraduateUserInfo',  // 修改研究生个人信息 post
  updateUndergraduateUserInfo: user + 'updateUndergraduateUserInfo',  // 修改本科生个人信息 post
  /*
  * 研究生列表信息 根据询问问题类型
  * */
  getMedalAward: 'medal/getMedalAward',
  getUserMedal: 'medal/getUserMedal',
  getMedalInfoList: 'medal/getMedalInfoList',
  getMedalInfoByMedal: 'medal/getMedalInfoByMedal',
  getUserMessage: 'message/getUserMessage',
  readMessage: 'message/readMessage', // /message/readMessage 请求方式：GET 参数：{"id":1} 返
  getPostgraduateInfo: user + 'getPostgraduateInfo',
  getPgShowInfo: user + 'getPgShowInfoByUserInfo',
  /*
  * 我的
  * */
  getPgUserChatYbCount: user + 'getPgUserChatYbCount',
  getUserPraiseList: user + 'getUserPraiseList',
  viewPostgraduateCustomQuestion: user + 'viewPostgraduateCustomQuestion', // 本科生查看研究生的自定义问题 get
  getPostduateOpinionAndSilence: user + 'getPostduateOpinionAndSilence', // 本科生查看研究生的自定义问题 get
  getUserCollectionLis: user + 'getUserCollectionLis',
  getCarousel: 'carouse/list', // post
  getUserInfo: user + 'getUserInfo', // get
  getUserAmountCount: user + 'getUserAmountCount', // get
  updateUserQuestionTestStatus: user + 'updateUserQuestionTestStatus', // get
  viewQuestionCount: 'viewQuestionRecord/viewQuestionCount', // get
  /*
  * 支付
  * */
  wxNotify: 'pay/wxNotify', // get
  order: 'pay/order',
  getSign: 'pay/sign',
  /*
  * 操作类上传
  * */
  postgraduateAttention: user + 'postgraduateAttention',
  share: 'share/share',
  upload: '/upload/image',
  setUserPhone: '/wx/setUserPhone', // post setUserPhone
  addFormId: user + 'addFormId',
  sendMessage: user + 'sendMessage',
  addUserComplain: user + 'addUserComplain',
  addFeedback: user + 'addFeedback',
  undergraduatePraise: user + 'undergraduatePraise',
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
  getMasterAskList: 'question/listSchoolMaster',
  updateAnswer: 'answer/updateAnswer',
  viewAttractQuestion: 'pgquestion/viewQuestion', // questionId
  getMyAnswerList: 'answer/myAnswer',
  wantAnswer: 'question/doQuestion',  // 我要回答 （研究生回答问题）
  questionSubmit: 'question/submit',
  rewardQuestionSubmit: 'question/rewardsubmit',
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
