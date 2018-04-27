import { handleActions } from 'redux-actions'

export default handleActions({
  'updateUSID' (state, action) {
    return {
      ...state,
      undergraduateSchoolId: action.payload
    }
  },
  'updateUMID' (state, action) {
    return {
      ...state,
      undergraduateMajorId: action.payload
    }
  },
  'updateVS' (state, action) {
    return {
      ...state,
      asyncNum: action.payload
    }
  }
}, {
  undergraduateSchoolId: 0,
  undergraduateMajorId: 0,
  volunteerSchool: '', // 志愿学校
  volunteerMajor: '' // 志愿专业
})
