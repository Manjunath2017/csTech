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

const TableFormat = () => {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios
      .get(`/api/users`)
      .then((response) => {
        setResult(response.data)
        console.log(response.data)
        setLoading(false)
      })
      .catch((error) => {
        alert('Error while fetching data')
      })
  }, [loading])

  const deleteRow = async (id) => {
    if (window.confirm('Are you sure? This cannot be undone! ')) {
      try {
        await axios.delete(`/api/user/${id}`)
        alert('Record deleted!')
        window.location = '/'
      } catch (error) {
        alert(`Something went wrong!`)
      }
    }
  }

  const editRow = async (user) => {
    console.log('')
  }
  const [searchOperation, setSearchOperation] = useState({
    name: '',
    email: '',
  })
  const { name, email } = searchOperation

  const search = (e) => {
    setSearchOperation({ ...searchOperation, [e.target.name]: e.target.value })
    console.log(searchOperation, email, name)
  }

  const searchData = (e) => {
    console.log(name, email)
  }

  // const [search, setSearchByName]= useState('');
  // const searchByName = async (event) =>{
  //   console.log(event.target.value);
  //   //get value from input field
  //   setSearchByName({search:event.target.value});

  //   //convert to lowercase
  //   const searchDataToLowerCase=search.toString().toLowerCase();

  //    const filteredResult = result.filter(item => {
  //    // console.log('item', Object.keys(item).some(key =>item[key].toString().toLowerCase() ) );

  //      return Object.keys(item).some(key =>
  //        item[key].toString().toLowerCase().includes(searchDataToLowerCase)
  //       );
  //      });
  //      console.log(result);
  //    }
  return (
    <Fragment>
      <div>
        <Grid container justify='center'>
          <Grid item xs={12} md={4} sm={4} className='card'>
            <CardContent>
              <TextField
                fullWidth
                label='Name'
                color='secondary'
                onChange={search}
                name='name'
                value={name}
                required={true}
              />
            </CardContent>
          </Grid>
          <Grid item xs={12} md={4} sm={4} className='card'>
            <CardContent>
              <TextField
                fullWidth
                label='Email'
                color='secondary'
                onChange={search}
                name='email'
                value={email}
                required={true}
              />
            </CardContent>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sm={4}
            className='card'
            style={{ marginTop: '25px' }}
          >
            <Button
              fullWidth
              variant='contained'
              color='primary'
              onClick={searchData}
            >
              {' '}
              Search
            </Button>
          </Grid>
        </Grid>
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
                  {result ? (
                    result.map((user) => (
                      <TableRow key={user._id}>
                        <TableCell align='center'>{user.name}</TableCell>
                        <TableCell align='center'>{user.email}</TableCell>
                        <TableCell align='center'>{user.salary}</TableCell>
                        <TableCell align='center'>{user.designation}</TableCell>
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
                            onClick={() => editRow(user)}
                          >
                            {' '}
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <h1>please wait</h1>
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

// const mapStateToProps = () => {
//   TableFormData
// }

export default TableFormat

// ..............................................
import React, { Fragment, useState } from 'react'
import Button from '@material-ui/core/Button'
import { collectInsertData } from '../Redux/index'
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

const AddUser = ({ getData, addNewUser }) => {
  var userData = {
    name: '',
    email: '',
    salary: '',
    designation: '',
  }
  var [inputValue, setInputValue] = useState(userData)
  // var { name, email, salary, designation } = inputValue
  // var [button, setButton] = useState(getData.update._id ? 'Update' : 'Submit')

  const inputTextHandler = (e) => {
    e.preventDefault()

    console.log('name', e.target.name, 'value', e.target.value, inputValue)

    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  var { _id, designation, email, name, salary } = getData.update

  const sendFormData = async () => {
    addNewUser(inputValue)

    // if (usersData.reset) {
    //   console.log(userData)

    //   setInputValue(userData)
    // }
  }

  return (
    <Fragment>
      <div>
        <Grid
          container
          justify='center'
          style={{ border: '1px solid #D0D0D0' }}
        >
          <Grid container justify='center'>
            <AppBar position='static'>
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
                value={_id ? name : inputValue.name}
                required={true}
              />
            </CardContent>
          </Grid>
          <Grid item xs={12} md={5} sm={5} className='card'>
            <CardContent>
              <TextField
                fullWidth
                label='Email'
                color='secondary'
                onChange={inputTextHandler}
                name='email'
                value={email}
                required={true}
              />
            </CardContent>
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
          <Grid item xs={12} md={10} sm={10} className='card'>
            <CardContent color='secondary'>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                onClick={sendFormData}
              >
                {_id ? 'Update' : 'Submit'}
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    getData: state.TableFormData,
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log('mapDispatchToProps')
  return {
    addNewUser: (e) => dispatch(collectInsertData(e)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddUser)

// ..........................................
{
  /* <Grid
            item
            xs={4}
            md={4}
            sm={4}
            className='card'
            style={{ display: getCurrentProfile.update._id ? '' : 'none' }}
          >
            <CardContent color='secondary'>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                onClick={
                  getCurrentProfile.update._id ? sendUpdate : sendFormData
                }
              >
                {getCurrentProfile.update._id ? 'Update' : 'Submit'}
              </Button>
            </CardContent>
          </Grid>
              */
}
