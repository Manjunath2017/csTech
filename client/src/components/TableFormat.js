import React, { Fragment, useEffect, useState } from "react";
import { TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Table,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormControl
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
              </Table>  
            </TableContainer> 
        </div>
      </Fragment>
    );
}

export default TableFormat;