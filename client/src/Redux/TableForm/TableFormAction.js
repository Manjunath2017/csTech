import axios from 'axios'
import {
  TABLE_DATA_SUCCESS,
  TABLE_DATA_REQUEST,
  TABLE_DATA_FAILURE,
  TABLE_ROW_DELETE,
  ADD_NEW_RECORD,
  ADD_NEW_FAILED,
  SET_UPDATE_DATA,
  RESET_STATE,
  SEARCH_FILTER,
} from './TableFormType'

//Main, fetch users from DB.....................
export const fetchUsers = () => {
  // console.log('fetch Users')
  return async (dispatch) => {
    dispatch(fetchUserRequest())

    try {
      // console.log('inside try block')
      const usersData = await axios.get(`/api/users`)
      // console.log('usersData', usersData)
      dispatch(TableFormSuccess(usersData.data))
    } catch (error) {
      dispatch(fetchUserFailure(error))
    }
  }
}

export const TableFormSuccess = (users) => {
  return {
    type: TABLE_DATA_SUCCESS,
    payload: users,
  }
}

export const fetchUserRequest = () => {
  // console.log('fetchUserRequest')
  return {
    type: TABLE_DATA_REQUEST,
  }
}

export const fetchUserFailure = (error) => {
  return {
    type: TABLE_DATA_FAILURE,
    payload: error,
  }
}
//End of fetch users from DB.....................

//Delete user's record.....................
export const DeleteUser = () => {
  return {
    type: TABLE_ROW_DELETE,
  }
}
export const DeleteUsersRecord = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/user/${id}`)
      // console.log('Record deleted!', id)
      dispatch(DeleteUser())
      dispatch(fetchUsers())
      // window.location = '/'
    } catch (error) {
      console.log(`Something went wrong!`)
    }
  }
}
//End of Delete user's record.....................

//Insert record...........
export const AddUsers = (result) => {
  // console.log('AddUsers')
  // return (dispatch) => {
  //   dispatch(fetchUsers)
  return {
    type: ADD_NEW_RECORD,
    payload: result,
  }
  // }
}

export const CreateUserFailure = (error) => {
  return {
    type: ADD_NEW_FAILED,
    payload: error,
  }
}

export const collectInsertData = (inputValue) => {
  return async (dispatch) => {
    // console.log('input', inputValue)
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }
      const result = await axios.post('/api/user/', inputValue, config)
      console.log('result', result.data)
      dispatch(AddUsers(result.data))

      if (result.data) {
        console.log('result.data')
        dispatch(fetchUsers())
      }
    } catch (err) {
      const errors = err //
      dispatch(CreateUserFailure())
      console.log('error while inserting data', errors)
    }
  }
}

// ........................Update.........................
export const setUpdataData = (data) => {
  // console.log(data)
  return {
    type: SET_UPDATE_DATA,
    payload: data,
  }
}

export const updateUserData = (data) => {
  // console.log('data._id', data._id)
  return (dispatch) => {
    const result = axios.patch(`/api/user/${data._id}`, data)
    result
      .then((response) => {
        console.log('result inside promise', response)
        dispatch(fetchUsers())
      })
      .catch((error) => {
        console.log('error', error)
      })
  }
}

//..............................reset
export const resetState = () => {
  return {
    type: RESET_STATE,
  }
}

//..............................searchFilter
export const searchFilterOp = (searchData) => {
  console.log(searchData, typeof searchData)
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }
      // const result = await axios.post('/api/user/', inputValue, config)
      // console.log('result', result.data)

      const result = await axios.post(`/api/user/filter/`, searchData, config)
      console.log(result.data)
      dispatch(receiveFilterData(result.data))
    } catch (error) {
      console.log('error', error)
    }
  }
}
export const receiveFilterData = (filterdData) => {
  console.log('calledFilter', filterdData)
  return {
    type: SEARCH_FILTER,
    payload: filterdData,
  }
}
