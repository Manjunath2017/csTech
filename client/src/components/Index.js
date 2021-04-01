import React, { Fragment } from 'react'
import AddUser from './AddUser'

import Graph from './Graph'
import TableFormat from './TableFormat'
import SearchFilter from './SearchFilter'

const Index = () => {
  return (
    <Fragment>
      <div>
        <AddUser />
        <SearchFilter />
        <TableFormat />
        <Graph />
      </div>
    </Fragment>
  )
}

export default Index
