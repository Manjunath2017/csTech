import React, { Fragment } from "react";
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table, TextField, MenuItem, InputLabel, Select, FormControl} from '@material-ui/core'
const AddUser=()=> {
  return (
      <Fragment>
        <div>
         <form>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell> <TextField  label="Name" color="secondary" /> </TableCell>
                    <TableCell> <TextField  label="Email" color="secondary" /> </TableCell>
                    <TableCell> <TextField  label="Salary" color="secondary" /> </TableCell>
                    <TableCell>  
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value='' >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
 
                   </TableCell>
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