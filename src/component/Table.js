import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, stock, price, sale) {
    
  return { name, stock, price, sale };
}

const rows = [
  createData('Frozen yoghurt', '32in stock', '$ 66', 24 ),
  createData('Ice cream ', '32in stock', '$55', 37 ),
 
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        
        <TableHead >
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total Sales</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.sale}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}