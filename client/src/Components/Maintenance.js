import React, { useEffect, useState } from 'react';
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

function createData(summary, property_name, unit_name, status, category, date) {
    return { summary, property_name, unit_name, status, category, date };
  }
  
  const rows = [
    createData('Clogged toilet', 'Magiq Square', 'Block D', 'Pending', 'Household', '12/10/2022'),
    createData('Broken windows', 'Magiq Square', 'Block D', 'Fixed', 'Household', '12/10/2022'),

  ];
  

export default function Maintenance() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [maintenance, setMaintenance] = useState([]);


useEffect(() => {
    fetch("http://localhost:3000/maintenances")
        .then((response) => response.json())
        .then((data) => {
            setMaintenance(data);
            console.log(data)

        }
        )
    // .then((data) => {
    //     console.log(data)
    // })
}, []);


    return (
        
        <div>
            <div className='payment-left-side'>
                <PermanentDrawerLeft />

                <div className='payment-buttons'>
               
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Add Maintenance
                    </Button>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {"Maintenance Form"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                              <p>Select Property</p>  <input className='payment-reminders-input' placeholder='Select Property'></input>
                              <p>Select Unit</p>  <input className='payment-reminders-input' placeholder='Select Unit'></input>
                              <p>Status</p>  <input className='payment-reminders-input' placeholder='Select Tenant'></input>
                              <p>Category</p>  <input className='payment-reminders-input'></input>
                              <p>Short Summary</p>  <input className='payment-reminders-input' placeholder='Short summary of the problem'></input>
                              <p>Description (Optional)</p>  <input className='payment-reminders-input' placeholder='Detailed description of the problem'></input>
                               {/* <Button variant="outlined">Add PAyment</Button> */}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button variant="outlined" onClick={handleClose} autoFocus>Add</Button>

                        </DialogActions>
                    </Dialog>
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

                        <p>Open Requests</p>
                        <h3>0.00</h3>
                    </div>

                </div>

            </div>

            <div className='payment-table'>
            <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Short summarry</TableCell>
            <TableCell align="right">Property Name</TableCell>
            <TableCell align="right">Unit Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Action</TableCell>



          </TableRow>
        </TableHead>
        <TableBody>
          {maintenance.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.date}
              </TableCell>
              <TableCell align="right">{item.short_summary}</TableCell>
              <TableCell align="right">{item.property_name}</TableCell>
              <TableCell align="right">{item.unit_name}</TableCell>
              <TableCell align="right">{item.status}</TableCell>
              <TableCell align="right">{item.category}</TableCell>

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