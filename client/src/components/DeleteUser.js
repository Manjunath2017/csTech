import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const DeleteUser=()=> {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get(`/api/user/600f017b0cbbe34879bb566d`)
      .then((response) => {
        setResult(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error while fetching data");
      });
  }, [loading]);
  return (
      <Fragment>
        <div>
          test

        </div>
      </Fragment>
    );
}

export default DeleteUser;