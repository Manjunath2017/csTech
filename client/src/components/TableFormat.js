import React, { Fragment } from "react";
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
      } from '@material-ui/core'

const TableFormat=()=> {
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