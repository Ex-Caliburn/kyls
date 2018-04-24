// 1:13大学科 2：公共科目类 3：复试科目类问题咨询 4：考研四大选择题与考研规划问题
// /school/getScienceInfoByType?science_type=1
// http://47.98.211.80:8080/kyls_backend//school/getScienceInfoByType?science_type=1

  // 研究生学校
// /school/getPostgraduateSchool?p_school_name=中国

    // 研究生专业
// /school/getPostgraduateMajor?p_major_name=中国

      // 本科生学校
// localhost:20018/school/getUndergraduateSchool?u_school_name=中国

//   本科生专业
// localhost:20018/school/getUndergraduateMajor?u_major_name=中国

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
