import React, { Fragment, useEffect, useState } from 'react'
import { TextField, Grid, CardContent } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import { useDispatch } from 'react-redux'
import { searchFilterOp } from '../Redux'

const SearchFilter = () => {
  const dispatch = useDispatch()
  const [searchOperation, setSearchOperation] = useState({
    name: '',
    email: '',
  })
  const { name, email } = searchOperation

  const search = (e) => {
    setSearchOperation({ ...searchOperation, [e.target.name]: e.target.value })
    console.log(searchOperation, email, name)
  }

  const searchData = () => {
    // console.log(name, email)
    dispatch(searchFilterOp(searchOperation))
  }

  return (
    <Fragment>
      <div>
        <Grid container justify='center'>
          <Grid item xs={12} md={4} sm={4} className='card'>
            <CardContent>
              <TextField
                fullWidth
                label='Name'
                type='text'
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
                type='email'
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
      </div>
    </Fragment>
  )
}

export default SearchFilter
