import React, { Fragment } from "react";
import AddUser from './AddUser';
import DeleteUser from './DeleteUser';
import Graph from './Graph';
import TableFormat from './TableFormat'

const Home=()=> {
  return (
      <Fragment>
        <div>
          Home...
          <AddUser />
          <TableFormat />
          <DeleteUser />
          <Graph />
        </div>
      </Fragment>
    );
}

export default Home;