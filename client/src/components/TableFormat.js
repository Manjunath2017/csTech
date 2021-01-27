import React, { Fragment, useEffect, useState } from "react";
import {
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Table,
  TableBody,
  TextField,
  Grid, 
  CardContent
} from "@material-ui/core";
import Button from '@material-ui/core/Button'
import axios from "axios";

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
const [searchOperation, setSearchOperation] = useState({ name: "", email: "" });
const {name, email} = searchOperation;


const search = e =>{
  setSearchOperation({...searchOperation, [e.target.name]: e.target.value })
  console.log(searchOperation, email, name);
}

const searchData = e =>{
  console.log(name, email);
}

// const [search, setSearchByName]= useState('');
// const searchByName = async (event) =>{
//   console.log(event.target.value);
//   //get value from input field 
//   setSearchByName({search:event.target.value});
 
//   //convert to lowercase
//   const searchDataToLowerCase=search.toString().toLowerCase();
  
//    const filteredResult = result.filter(item => {
//    // console.log('item', Object.keys(item).some(key =>item[key].toString().toLowerCase() ) );
   
//      return Object.keys(item).some(key =>
//        item[key].toString().toLowerCase().includes(searchDataToLowerCase)
//       );
//      });
//      console.log(result);
//    }
  return (
    <Fragment>
      <div>
      <Grid container justify="center">
          <Grid item xs={12} md={4} sm={4} className="card">
            <CardContent>
              <TextField fullWidth
                label="Name"
                color="secondary"
                onChange={search}
                name="name"
                value={name}
                required={true}
              />
            </CardContent>
          </Grid>
          <Grid item xs={12} md={4} sm={4} className="card">
            <CardContent>
              <TextField fullWidth
                label="Email"
                color="secondary"
                onChange={search}
                name="email"
                value={email}
                required={true}
              />
            </CardContent>
          </Grid>
          <Grid item xs={12} md={4} sm={4} className="card" style={{marginTop:"25px"}}> 
            <Button fullWidth variant="contained" color="primary" onClick = { searchData } > Search</Button>
          </Grid>
        </Grid>
        <Grid container justify="center" style={{border:'1px solid #D0D0D0'}}>
        <Grid item xs={12} md={12} sm={12} className="card">
        <TableContainer>
          <Table>
            <TableHead style={{backgroundColor:"#3F51B5", color:"#fff"}} >
              <TableRow>
                <TableCell align="center">
                  <h2 style={{color:"#fff"}} > Name </h2>
                </TableCell>
                <TableCell align="center"  className="tableHeader">
                    <h2 style={{color:"#fff"}}> Email </h2>
                </TableCell>
                <TableCell align="center"  className="tableHeader">
                    <h2 style={{color:"#fff"}}> Salary </h2>
                </TableCell>
                <TableCell align="center"  className="tableHeader">
                    <h2 style={{color:"#fff"}}> Designation </h2>
                </TableCell>
                <TableCell align="right" className="tableHeader">
                    <h2 style={{color:"#fff"}}> Action </h2>
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
        </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default TableFormat;
