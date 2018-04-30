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
const api = {
  /*
  * 登录相关
  * */
  'login': 'wx/login',
  /*
  * 信息录入
  * */
  graduateRegister: '/user/postgraduateRegister',
  undergraduateRegister: '/user/undergraduateRegister',
  /*
  * 上传
  * */
  upload: '/upload/image',
  getScienceInfoByType: school + 'getScienceInfoByType',
  getPostgraduateSchool: school + 'getPostgraduateSchool',
  getPostgraduateMajor: school + 'getPostgraduateMajor',
  getUndergraduateSchool: school + 'getUndergraduateSchool',
  getUndergraduateMajor: school + 'getUndergraduateMajor'
}

export default api
