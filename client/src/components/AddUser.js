import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import { collectInsertData, updateUserData, resetState } from '../Redux/index'
import { connect } from 'react-redux'

import {
  CardContent,
  TextField,
  Grid,
  NativeSelect,
  Toolbar,
  Typography,
  AppBar,
} from '@material-ui/core'

const AddUser = ({ getCurrentProfile, addNewUser, updateUser }) => {
  //using hooks useDispatch()
  const dispatch = useDispatch()
  var initialState = {
    name: '',
    email: '',
    salary: '',
    designation: '',
  }
  var [inputValue, setInputValue] = useState(initialState)
  var [_id, set_id] = useState('')
  // var [button, setButton] = useState(getCurrentProfile.update._id ? 'Update' : 'Submit')

  const inputTextHandler = (e) => {
    e.preventDefault()
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }
  var { name, email, salary, designation } = inputValue
  useEffect(() => {
    if (getCurrentProfile.update._id) {
      setInputValue({
        _id: getCurrentProfile.update._id,
        name: getCurrentProfile.update.name,
        email: getCurrentProfile.update.email,
        salary: getCurrentProfile.update.salary,
        designation: getCurrentProfile.update.designation,
      })
      set_id(getCurrentProfile.update._id)
    } else {
      setInputValue({
        _id: '',
        name: '',
        email: '',
        salary: '',
        designation: '',
      })
      set_id('')
    }
    _id = getCurrentProfile.update._id
  }, [getCurrentProfile, addNewUser, updateUser])

  // console.log('inputValue', inputValue)
  const sendFormData = async () => {
    addNewUser(inputValue)
  }

  // ,,,,,,,,,,,,,,,,,,,,,,,,
  const [emailVal, setEmailVal] = useState('')
  var count = 0
  const inputEmailvalidation = (e) => {
    const errors = {}
    var name_email = e.target.value ? e.target.value : ''
    console.log(name_email)
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g
    const result = pattern.test(name_email)
    console.log(`${name_email}`, e.target.value)
    if (result === true) {
      console.log('valid')
      errors.email = ''
      setEmailVal('')
    } else {
      console.log('not valid')
      errors.email = 'Email must be formatted as name@address.xyz'
      setEmailVal('Email must be formatted as name@address.xyz')
    }
  }
  const sendUpdate = () => {
    updateUser(inputValue)
  }
  const resetForm = () => {
    dispatch(resetState())
    // console.log('formReset')
  }
  // const { _id } = getCurrentProfile.update._id
  const [form, setForm] = useState({})
  return (
    <Fragment>
      <div>
        <Grid
          container
          justify='center'
          style={{ border: '1px solid #D0D0D0' }}
        >
          <Grid container justify='center'>
            <AppBar
              position='static'
              style={{
                backgroundColor: `${_id}` ? '#f00' : '#3F51B5',
              }}
            >
              <Toolbar>
                <Typography variant='h3' style={{ margin: '0 auto' }}>
                  {_id ? 'Update user' : 'Add User'}
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12} md={5} sm={5} className='card'>
            <CardContent>
              <TextField
                fullWidth
                label='Name'
                color='secondary'
                onChange={inputTextHandler}
                name='name'
                value={name}
                required={true}
              />
            </CardContent>
          </Grid>
          <Grid item xs={12} md={5} sm={5} className='card'>
            <CardContent>
              <TextField
                fullWidth
                label='Email'
                type='email'
                color='secondary'
                onChange={inputTextHandler}
                name='email'
                value={email}
                required={true}
                onBlur={inputEmailvalidation}
              />
            </CardContent>
            <p>{emailVal ? emailVal : ''}</p>
          </Grid>

          <Grid item xs={12} md={5} sm={5} className='card'>
            <CardContent color='secondary'>
              <TextField
                fullWidth
                label='Salary'
                color='secondary'
                type='number'
                onChange={inputTextHandler}
                name='salary'
                value={salary}
                required={true}
              />
            </CardContent>
          </Grid>
          <Grid item xs={12} md={5} sm={5} className='card'>
            <CardContent>
              {' '}
              <br />
              <NativeSelect
                fullWidth
                name='designation'
                value={designation}
                onChange={inputTextHandler}
              >
                <option value=''>Select Designation</option>
                <option value='SoftwareArchitect'>Software Architect</option>
                <option value='CEO'>CEO</option>
                <option value='BackendDeveloper'>Backend Developer</option>
                <option value='FrontendDeveloper'>Frontend Developer</option>
              </NativeSelect>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={_id ? 4 : 12}
            md={_id ? 4 : 10}
            sm={_id ? 5 : 10}
            className='card'
          >
            <CardContent color='secondary'>
              <Button
                fullWidth
                variant='contained'
                color={_id ? 'inherit' : 'primary'}
                onClick={_id ? sendUpdate : sendFormData}
              >
                {_id ? 'Update' : 'Submit'}
              </Button>
            </CardContent>
          </Grid>
          {_id ? (
            <Grid item xs={4} md={4} sm={5} className='card'>
              <CardContent color='secondary'>
                <Button
                  fullWidth
                  variant='contained'
                  // color='secondary'
                  onClick={resetForm}
                >
                  Reset
                </Button>
              </CardContent>
            </Grid>
          ) : (
            ''
          )}
        </Grid>
      </div>
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    getCurrentProfile: state.TableFormData,
  }
}
const mapDispatchToProps = (dispatch) => {
  // console.log('mapDispatchToProps')
  return {
    addNewUser: (e) => dispatch(collectInsertData(e)),
    updateUser: (e) => dispatch(updateUserData(e)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddUser)
