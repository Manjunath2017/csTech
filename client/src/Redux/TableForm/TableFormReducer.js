import {
  TABLE_DATA_FAILURE,
  TABLE_DATA_REQUEST,
  TABLE_DATA_SUCCESS,
  TABLE_ROW_DELETE,
  ADD_NEW_RECORD,
  ADD_NEW_FAILED,
  SET_UPDATE_DATA,
  UPDATE_USER_DATA,
  RESET_STATE,
  SEARCH_FILTER,
} from './TableFormType'

const initialState = {
  loading: false,
  users: [],
  error: '',
  update: {
    _id: '',
    designation: '',
    email: '',
    name: '',
    salary: '',
  },
}

const TableFormReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TABLE_DATA_SUCCESS:
    case SEARCH_FILTER:
      console.log('TABLE_DATA_SUCCESS  ')
      return {
        ...state,
        loading: false,
        users: payload,
        error: '',
        update: {
          _id: '',
          designation: '',
          email: '',
          name: '',
          salary: '',
        },
      }
    case TABLE_DATA_REQUEST:
      console.log('TABLE_DATA_REQUEST')
      return {
        ...state,
        loading: true,
      }
    case TABLE_DATA_FAILURE:
    case ADD_NEW_FAILED:
      return {
        loading: false,
        users: [],
        error: payload,
        update: '',
      }
    case ADD_NEW_RECORD:
    case TABLE_ROW_DELETE:
    case UPDATE_USER_DATA:
    case RESET_STATE:
      console.log('from delete row ===>(ADD_NEW_RECORD)')
      return {
        ...state,
        update: '',
      }
    case SET_UPDATE_DATA:
      return {
        ...state,
        update: payload,
      }
    default:
      return state
  }
}

export default TableFormReducer
