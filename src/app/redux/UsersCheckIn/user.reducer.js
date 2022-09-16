import {GET, UPDATE, SUBMIT, DELETE} from './user.types'

const INITIAL_STATE = {
  users: [],
  quiz: {},
  pin: '',
  user_ans: [],
  reportId: null,
}

const reducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action
  switch (type) {
    case GET:
      return {
        ...state,
        data: {
          name: 'Vishnu',
          email: 'vj007sharma@gmail.com',
          mobile: '8560948956',
          query: 'hey wassup',
        },
      }
    case 'JOIN':
      const data = [...state.users]
      data.push(payload)
      return {
        ...state,
        users: data,
      }
    case 'USERANS':
      const ans = [...state.user_ans]
      ans.push(payload)
      return {
        ...state,
        user_ans: ans,
      }
    case 'REMOVEUSERANS':
      return {
        ...state,
        user_ans: payload,
      }
    case 'SETREPORTID':
      return {
        ...state,
        reportId: payload,
      }
    case 'GETQUIZ':
      return {
        ...state,
        quiz: payload,
      }
    case 'PIN':
      return {
        ...state,
        pin: payload,
      }
    case UPDATE:
      let temp = [...state.data]
      const i = temp.findIndex((x) => x.id === payload.id)
      if (i !== -1) {
        temp[i] = payload
      }
      return {
        ...state,
        data: temp,
      }

    case DELETE:
      let deletetemp = [...state.data]
      deletetemp.splice(payload, 1)
      return {
        ...state,
        data: deletetemp,
      }
    default:
      return state
  }
}
export default reducer
