import React, { Fragment, useState } from "react";
import Button from '@material-ui/core/Button';
import axios from 'axios';

import { 
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    Table,
    TextField,
    MenuItem,
    InputLabel,
    Select
    } from '@material-ui/core'

  const AddUser=()=> {
    var userData={
      name:"",
      email:"",
      salary:"",
      designation:""
    }
    var [inputValue, setInputValue] = useState(userData);
    var {name, email, salary, designation}=inputValue;

    const inputTextHandler = e =>{
      e.preventDefault();
      setInputValue({...inputValue, [e.target.name]:e.target.value})
      console.log(e.target.value);
    }

    const postData = data =>{
      console.log(data);
    }
    return (
      <Fragment>
        <div>
         <form>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell> <TextField  label="Name" color="secondary" onChange={inputTextHandler} name="name" value={name}/> </TableCell>
                    <TableCell> <TextField  label="Email" color="secondary" onChange={inputTextHandler} name="email" value={email}/> </TableCell>
                    <TableCell> <TextField  label="Salary" color="secondary" onChange={inputTextHandler} name="salary" value={salary}/> </TableCell>
                    <TableCell>  
                        <InputLabel id="demo-simple-select-label" onChange={inputTextHandler} name="designation" value={designation}>Designation</InputLabel>
                        <Select labelId="demo-simple-select-label" name="designation" value="" >
                          <MenuItem value="SoftwareArchitect">Software Architect</MenuItem>
                          <MenuItem value="CEO">CEO</MenuItem>
                          <MenuItem value="BackendDeveloper">Backend Developer</MenuItem>
                          <MenuItem value="BackendDeveloper">Frontend Developer</MenuItem>
                        </Select>
                   </TableCell>
                   <TableCell> <Button variant="contained" color="primary" onChange={postData}> Submit </Button> </TableCell>
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