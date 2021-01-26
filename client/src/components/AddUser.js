import React, { Fragment } from "react";
import Button from '@material-ui/core/Button';

import { 
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    Table,
    TextField,
    MenuItem,
    InputLabel,
    Select,
    FormControl
        } from '@material-ui/core'
const submitFormData=()=>{
  console.log('submitFrom!');
}
  const AddUser=()=> {
  return (
      <Fragment>
        <div>
         <form onSubmit={e=>submitFormData(e)}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell> <TextField  label="Name" color="secondary" /> </TableCell>
                    <TableCell> <TextField  label="Email" color="secondary" /> </TableCell>
                    <TableCell> <TextField  label="Salary" color="secondary" /> </TableCell>
                    <TableCell>  
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select labelId="demo-simple-select-label" name="designation" value="" >
                          <MenuItem value="SoftwareArchitect">Software Architect</MenuItem>
                          <MenuItem value="CEO">CEO</MenuItem>
                          <MenuItem value="BackendDeveloper">Backend Developer</MenuItem>
                          <MenuItem value="BackendDeveloper">Frontend Developer</MenuItem>
                        </Select>
                   </TableCell>
                   <TableCell> <Button variant="contained" color="primary"> Submit </Button> </TableCell>
                  </TableRow>
                </TableHead>
              </Table>  
            </TableContainer> 
          </form> 
        </div>
      </Fragment>
    );
}
export default AddUser;