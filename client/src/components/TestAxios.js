import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../Redux'

const TestAxios = ({ userData, fetchUserData }) => {
  useEffect(() => {
    fetchUserData()
  }, [])
  console.log('userData', userData.users)

  return (
    <Fragment>
      <div>
        <h1>Manju</h1>
        {userData.users.map((data, index) => (
          <p key={index}> Name:{data.name} </p>
        ))}
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.TableFormData,
  }
}
const mapDispatchToProps = (dispatch) => {
  // console.log('dispatch', dispatch)
  return {
    fetchUserData: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestAxios)
