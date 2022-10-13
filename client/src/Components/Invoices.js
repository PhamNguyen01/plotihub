import * as React from 'react';
import '../App.css'
import PermanentDrawerLeft from './Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, invoice_id, tenant, item, property, status, amount_to_pay) {
    return { date, invoice_id, tenant, item, property, status, amount_to_pay };
  }
  
  const rows = [
    createData('7/1/2022', 12345, 'David Park', 1, 'Magiq Square', 'Paid', 10000,   ),
    createData('7/2/2022', 12345, 'David Park', 1, 'Magiq Square', 'Paid', 10000,   ),
    createData('7/3/2022', 12345, 'David Park', 1, 'Magiq Square', 'Paid', 10000,   ),
    createData('7/4/2022', 12345, 'David Park', 1, 'Magiq Square', 'Paid', 10000,   ),
    createData('7/5/2022', 12345, 'David Park', 1, 'Magiq Square', 'Paid', 10000,   ),
    createData('7/6/2022', 12345, 'David Park', 1, 'Magiq Square', 'Paid', 10000,   )
  ];
  

export default function Invoices() {
    return (
        <div>
            <div className='invoice-left-side'>
                <PermanentDrawerLeft />

                <div className='invoice-buttons'>
                    <Button variant="outlined"> Add Invoice </Button>
                    <Button variant="outlined"> Bulk Upload Invoice </Button>
                    <Button variant="outlined"> Generate Rent Invoice</Button>
                </div>

                <div className='invoice-left-filters'>
                    <input className='invoice-left-inputs' placeholder='Type to search'></input>
                    <h5>Date</h5>
                    <input className='invoice-left-inputs' placeholder='Start date'></input><br />
                    <input className='invoice-left-inputs' placeholder='Start date'></input>
                </div>
            </div>

            <div className='invoice-right-side'>
                <div className='invoice-summarry-card'>
                    <div className='invoice-card-details'>
                        <h4>Summary</h4>
                        <Divider />

                        <p>Total</p>
                        <h3>0.00</h3>
                        <p>(KSH)</p>
                    </div>

                </div>

            </div>

            <div className='invoice-table'>
            <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Invoice ID/Number</TableCell>
            <TableCell align="right">Tenant</TableCell>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">Property (Unit)</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Amount to pay (kshs)</TableCell>
            <TableCell align="right">Action</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.invoice_id}</TableCell>
              <TableCell align="right">{row.tenant}</TableCell>
              <TableCell align="right">{row.item}</TableCell>
              <TableCell align="right">{row.property}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.amount_to_pay}</TableCell>

              <Button variant='outlined'>Download</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>

        </div>
    )

}