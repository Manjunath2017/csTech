import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";

import {
  CardContent,
  TextField,
  Grid,
  NativeSelect
} from "@material-ui/core";
import axios from 'axios';

const AddUser = () => {
  var userData = {
    name: "",
    email: "",
    salary: "",
    designation: "",
  };
  var [inputValue, setInputValue] = useState(userData);
  var { name, email, salary, designation } = inputValue;

  const inputTextHandler = (e) => {
    e.preventDefault();
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const sendFormData = async()  => {
    if(name.length === 0){
      alert("Name is required!");
    }
    if(email.length === 0){
      alert("Email is required!");
    }
    if(salary.length === 0){
      alert("Salary is required!");
    }
    // console.log(inputValue);
    try{
      const config={
          headers:{
              'Content-type':'application/json'
          }
      }
      await axios.post('/api/user/', inputValue, config);
      window.location = '/';
    }catch(err){
      const errors=err.response.data.error; //
      console.log(errors)
   }
  }

  return (
    <Fragment>
      <div>
        <Grid container justify="center">
          <Grid item xs={12} md={5} sm={5} className="card">
            <CardContent>
              <TextField fullWidth
                label="Name"
                color="secondary"
                onChange={inputTextHandler}
                name="name"
                value={name}
                required={true}
              />
            </CardContent>
          </Grid>
          <Grid item xs={12} md={5} sm={5} className="card">
            <CardContent>
              <TextField fullWidth
                label="Email"
                color="secondary"
                onChange={inputTextHandler}
                name="email"
                value={email}
                required={true}
              />
            </CardContent>
          </Grid>
          <Grid item xs={12} md={5} sm={5} className="card">
            <CardContent color="secondary">
              <TextField fullWidth
                label="Salary"
                color="secondary"
                type="number"
                onChange={inputTextHandler}
                name="salary"
                value={salary}
                required={true}
              />
            </CardContent>
          </Grid>
          <Grid item xs={12} md={5} sm={5} className="card" >
            <CardContent> <br />
              <NativeSelect fullWidth
                name="designation"
                value={designation}
                onChange={inputTextHandler}
              >
                <option value="">Select Designation</option>
                <option value="SoftwareArchitect">Software Architect</option>
                <option value="CEO">CEO</option>
                <option value="BackendDeveloper">Backend Developer</option>
                <option value="FrontendDeveloper">Frontend Developer</option>
              </NativeSelect>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={10} sm={10} className="card">
            <CardContent color="secondary">
            <Button fullWidth variant="contained" color="primary" onClick = { sendFormData } > Submit</Button>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};
export default AddUser;
