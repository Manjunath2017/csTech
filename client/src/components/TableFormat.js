import React, { Fragment, useEffect, useState } from "react";
import {
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Table,
  TableBody,
} from "@material-ui/core";
import Button from '@material-ui/core/Button'
import axios from "axios";
const style={
  fontSize:"16px"
}
const TableFormat = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/users`)
      .then((response) => {
        setResult(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error while fetching data");
      });
  }, [loading]);

const deleteRow = async id =>{

  if(window.confirm('Are you sure? This cannot be undone! ')){
    try {
        await axios.delete(`/api/user/${id}`); 
        alert('Record deleted!');
        // window.location = '/';
    } catch (error) {
      alert(`Something went wrong!`);
    }
  }
}

const editRow = async user =>{
  console.log('');
}
  return (
    <Fragment>
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" className="tableHeader">
                  Name
                </TableCell>
                <TableCell align="center" className="tableHeader">
                  Email
                </TableCell>
                <TableCell align="center" className="tableHeader">
                  Salary
                </TableCell>
                <TableCell align="center" className="tableHeader">
                  Designation
                </TableCell>
                <TableCell align="right" className="tableHeader">
                  Action
                </TableCell>
                <TableCell align="center" className="tableHeader"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {result ? (
                result.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell align="center">{user.name}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.salary}</TableCell>
                    <TableCell align="center">{user.designation}</TableCell>
                    <TableCell align="right">
                    <Button variant="contained" color="secondary" onClick = { ( ) => deleteRow ( user._id ) } > Delete</Button>
                    </TableCell>
                    <TableCell align="left">
                      <Button variant="contained"  onClick = { ( ) => editRow ( user ) } > Edit</Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <h1>please wait</h1>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Fragment>
  );
};

export default TableFormat;
