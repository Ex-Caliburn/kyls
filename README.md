# kyls

:
/user/postgraduateRegister  post  研究生注册
:
private Long userId;
private String userName;
private String email;
private String idNumber;//身份证号
private Long undergraduateSchoolId;
private Long undergraduateMajorId;
private Long postgraduateSchoolId;
private Long postgraduateMajorTypeId;//专业大类
private Long postgraduateMajorId;
private String postgraduateNumber; //研究生学号
private Integer degreeNature;//学位性质 1学术型、2专业型
private Integer studyMode;//就读学习方式 1:全日制、2:非全日制
private Integer grade;//年级 1.准研究生、2.研一、3.研二、4.研三
private String publicSubjectFirst;//初试公共科目
private String professionalSubjectFirst;//初试专业科目，逗号分割
private String answerWill;// 回答意愿
private String educationPicture;//学历证明图片 这个时参数
:
  /user/undergraduateRegister  post  本科生注册
:
private Long userId;
private String userName;
private String email;
private Long undergraduateSchoolId;
private Long undergraduateMajorId;
private Boolean isfreshGraduate; //是否应届
private String volunteerSchool; //志愿学校
private String volunteerMajor;//志愿专业
