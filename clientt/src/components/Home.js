import React, { Fragment } from "react";
import AddUser from './AddUser';
import DeleteUser from './DeleteUser';
import Graph from './Graph';


const Home=()=> {
  return (
      <Fragment>
        <div>
          Home...
          <AddUser />
          <DeleteUser />
          <Graph />
        </div>
      </Fragment>
    );
}

export default Home;