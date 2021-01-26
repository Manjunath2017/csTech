import React, { Fragment, useEffect, useState } from "react";
import { TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Table,
  TableBody
      } from '@material-ui/core';

import axios from "axios";

const TableFormat=()=> {  
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');
  
  useEffect(() => {
      axios
      .get(`http://localhost:5000/api/users`)
      .then(response => {
        setResult(response.data);
        console.log(response.data);
      })
      .catch(error => {
        setError('Error while fetching data');
      });
  }, [error]);

  return (
      <Fragment>
        <div>
          TableFormat...
          <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className="tableHeader">Name</TableCell>
                    <TableCell align="center" className="tableHeader">Email</TableCell>
                    <TableCell align="center" className="tableHeader">Salary</TableCell>
                    <TableCell align="center" className="tableHeader">Designation</TableCell>
                    <TableCell align="center" className="tableHeader">Action</TableCell>  
                  </TableRow>
                </TableHead>
                <TableBody>

                   {
            result ? result.map(user=>
              <TableRow key={user._id}>
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.salary}</TableCell>
                <TableCell align="center">{user.designation}</TableCell>
              </TableRow>
                    
                ) : (
                    <h1>please wait</h1>
                )
        }
                </TableBody>
              </Table>  
            </TableContainer> 
        </div>
      </Fragment>
    );
}

export default TableFormat;