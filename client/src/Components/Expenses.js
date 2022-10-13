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

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function createData(date, property, category,  status, amount_to_pay) {
    return { date, property, category, status, amount_to_pay };
  }
  
  const rows = [
    createData('7/1/2022', 'Magiq Square',  "Unknown", 'Paid', 10000,  ),
    createData('7/2/2022', 'Magiq Square',  "Unknown", 'Paid', 10000,  ),
    createData('7/3/2022', 'Magiq Square',  "Unknown", 'Paid', 10000,  ),
    createData('7/4/2022', 'Magiq Square',  "Unknown", 'Paid', 10000,  ),
    createData('7/5/2022', 'Magiq Square',  "Unknown", 'Paid', 10000,  ),
    createData('7/6/2022', 'Magiq Square',  "Unknown", 'Paid', 10000,  )
  ];
  

export default function Expenses() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        
        <div>
            <div className='payment-left-side'>
                <PermanentDrawerLeft />

                <div className='payment-buttons'>
               
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Record Expenses
                    </Button>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {"Send Balance Reminders"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                              <p>Select Tenant</p>  <input className='payment-reminders-input' placeholder='Select Tenant'></input>
                              <p>Paid Amount</p>  <input className='payment-reminders-input' placeholder='Enter Paid Amount e.g 10000'></input>
                              <p>Select Tenant</p>  <input className='payment-reminders-input' placeholder='Select Tenant'></input>
                              <p>Payment Type (optional)</p>  <input className='payment-reminders-input' placeholder='Select Tenant'></input>
                              <p>Description (optional)</p>  <input className='payment-reminders-input' placeholder='Select Tenant'></input>
                                {/* <Button variant="outlined">Add PAyment</Button> */}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button variant="outlined" onClick={handleClose} autoFocus>Add Payment</Button>

                            {/* <Button autoFocus onClick={handleClose}>
                                Disagree
                            </Button>
                            <Button onClick={handleClose} autoFocus>
                                Agree
                            </Button> */}
                        </DialogActions>
                    </Dialog>
               


                    {/* <Button variant="outlined"> Bulk Upload Payment </Button> */}
                    {/* <Button variant="outlined"> Generate Rent payment</Button> */}
                </div>

                <div className='payment-left-filters'>
                    <input className='payment-left-inputs' placeholder='Type to search'></input>
                    <h5>Date</h5>
                    <input className='payment-left-inputs' placeholder='Start date'></input><br />
                    <input className='payment-left-inputs' placeholder='Start date'></input>
                </div>
            </div>

            <div className='payment-right-side'>
                <div className='payment-summarry-card'>
                    <div className='payment-card-details'>
                        <h4>Summary</h4>
                        <Divider />

                        <p>Total</p>
                        <h3>0.00</h3>
                        <p>(KSH)</p>
                    </div>

                </div>

            </div>

            <div className='payment-table'>
            <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Property (Unit)</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Amount</TableCell>
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
              <TableCell align="right">{row.property}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.amount_to_pay}</TableCell>
              <TableCell align="right"><Button variant='outlined'>Download</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>

        </div>
    )

}