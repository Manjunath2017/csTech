import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';

const Graph=()=> {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get(`/api/users/`)
      .then((response) => {
        setResult(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        alert("Error while fetching data");
      });
  }, [loading]);
  return (
      <Fragment>
        <div>
          Graph...

        </div>
      </Fragment>
    );
}

export default Graph;