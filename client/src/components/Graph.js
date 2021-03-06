import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import {
  BarChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  Bar,
} from 'recharts'
import { Typography, Toolbar, Grid } from '@material-ui/core'

const Graph = () => {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`/api/users/`)
      .then((response) => {
        setResult(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        alert('Error while fetching data')
      })
  }, [loading])
  const countDays = () => {}
  const data = [
    { name: 'Sunday', Days: 9 },
    { name: 'monday', Days: 10 },
    { name: 'Tuesday', Days: 20 },
    { name: 'wednesday', Days: 0 },
    { name: 'Thursday', Days: 20 },
    { name: 'Saturday', Days: 20 },
  ]
  return (
    <Fragment>
      <div>
        <Grid container justify='center'>
          <Toolbar>
            <Typography variant='h5' style={{ margin: '0 auto' }}>
              Days
            </Typography>
          </Toolbar>
        </Grid>
        <Grid container justify='center'>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey='name'
              scale='point'
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray='3 3' />
            <Bar dataKey='Days' fill='#8884d8' background={{ fill: '#eee' }} />
          </BarChart>
        </Grid>
      </div>
    </Fragment>
  )
}

export default Graph
