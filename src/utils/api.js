// 1:13大学科 2：公共科目类 3：复试科目类问题咨询 4：考研四大选择题与考研规划问题
// /school/getScienceInfoByType?science_type=1
// http://47.98.211.80:8080/kyls_backend//school/getScienceInfoByType?science_type=1

//   user/updateUserInfo  修改用户信息
//
//   private String wxFaceUrl;
// private String email;
// private String volunteerSchool;
// private String volunteerMajor;
// private String answerWill;
// private Integer userType; //1:本科生 2 研究生
//   answerWill  如果是研究生 直传这个，和private String wxFaceUrl;
// private String email;
//
//   /upload/image post  file

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
  share: 'share/share',
  getUserMessage: 'message/getUserMessage',
  readMessage: 'message/readMessage', // /message/readMessage 请求方式：GET 参数：{"id":1} 返
  getPostgraduateInfo: user + 'getPostgraduateInfo',
  /*
  * 操作类上传
  * */
  upload: '/upload/image',
  addFormId: user + 'addFormId',
  sendMessage: user + 'sendMessage',
  addPostGraduateQuestionInfo: user + 'addPostgraduteQuestionInfo',
  /*
  * 日记
  * */
// { "code": 0, "error": "", "data": [ { "diaryId": 2, "userId": 2, "title": "1123121", "content": "dsajkgdashgkas", "diaryPictures": "我喜欢问问题", "status": 1, "updatedAt": 1525179840480, "createdAt": 1525179840000 } ] }
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
