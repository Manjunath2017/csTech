import React, { Fragment, useEffect, useState } from 'react'
import {
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Table,
  TableBody,
  TextField,
  Grid,
  CardContent,
} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import axios from 'axios'

import { connect } from 'react-redux'
import { fetchUsers, DeleteUsersRecord, setUpdataData } from '../Redux'

const TableFormat = ({ userData, fetchUserData, DeleteUser, setUpdate }) => {
  useEffect(() => {
    console.log(userData.users.length)
    if (userData) {
    }
    fetchUserData()
  }, [])

  // console.log('result', result)
  const deleteRow = async (id) => {
    if (window.confirm('Are you sure? This cannot be undone! ')) {
      DeleteUser(`${id}`)
    }
  }

  const editTablesRow = async (user) => {
    setUpdate(user)
  }

  return (
    <Fragment>
      <div>
        <Grid
          container
          justify='center'
          style={{ border: '1px solid #D0D0D0' }}
        >
          <Grid item xs={12} md={12} sm={12} className='card'>
            <TableContainer>
              <Table>
                <TableHead
                  style={{ backgroundColor: '#3F51B5', color: '#fff' }}
                >
                  <TableRow>
                    <TableCell align='center'>
                      <h2 style={{ color: '#fff' }}> Name </h2>
                    </TableCell>
                    <TableCell align='center' className='tableHeader'>
                      <h2 style={{ color: '#fff' }}> Email </h2>
                    </TableCell>
                    <TableCell align='center' className='tableHeader'>
                      <h2 style={{ color: '#fff' }}> Salary </h2>
                    </TableCell>
                    <TableCell align='center' className='tableHeader'>
                      <h2 style={{ color: '#fff' }}> Designation </h2>
                    </TableCell>
                    <TableCell align='right' className='tableHeader'>
                      <h2 style={{ color: '#fff' }}> Action </h2>
                    </TableCell>
                    <TableCell
                      align='center'
                      className='tableHeader'
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userData.users.length > 0 ? (
                    !userData.loading ? (
                      userData.users.map((user) => (
                        <TableRow key={user._id}>
                          <TableCell align='center'>{user.name}</TableCell>
                          <TableCell align='center'>{user.email}</TableCell>
                          <TableCell align='center'>
                            {user.salary.toLocaleString()}
                          </TableCell>
                          <TableCell align='center'>
                            {user.designation}
                          </TableCell>
                          <TableCell align='right'>
                            <Button
                              variant='contained'
                              color='secondary'
                              onClick={() => deleteRow(user._id)}
                            >
                              {' '}
                              Delete
                            </Button>
                          </TableCell>
                          <TableCell align='left'>
                            <Button
                              variant='contained'
                              onClick={() => editTablesRow(user)}
                            >
                              {' '}
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell>
                          <h1>please wait</h1>{' '}
                        </TableCell>
                      </TableRow>
                    )
                  ) : (
                    <TableRow>
                      <TableCell align='center'>No record found!</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    userData: state.TableFormData,
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log('dispatch', dispatch)
  return {
    fetchUserData: () => dispatch(fetchUsers()),
    DeleteUser: (e) => dispatch(DeleteUsersRecord(e)),
    setUpdate: (e) => dispatch(setUpdataData(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableFormat)

// {test?
//   test1Statement
//   :
//   test2?test2Statement: test2
// }
