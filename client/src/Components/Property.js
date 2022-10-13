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

function createData(property_name, number_of_units, city, water_rate, electricity_rate, mpesa_paybill) {
    return { property_name, number_of_units, city, water_rate, electricity_rate, mpesa_paybill };
}

const rows = [
    createData('Tassia Hill', '10', 'Nairobi', '300', 'Token', 2323434),
    createData('Tassia Estate', '10', 'Nairobi', '300', 'Token', 2443434)

];


export default function Property() {

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
            <div className='invoice-left-side'>
                <PermanentDrawerLeft />
                <div className='payment-buttons'>

                    <Button variant="outlined" onClick={handleClickOpen}>Add Property</Button>
                    <Button variant="outlined"> Add Unit </Button>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {"Tenant Form"}
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

                        <p>Total Units</p>
                        <h3>0</h3>
                   
                    </div>

                </div>

            </div>

            <div className='invoice-table'>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {/* <TableCell>Date</TableCell> */}
                                <TableCell align="right">Property Name</TableCell>
                                <TableCell align="right">Number of Units</TableCell>
                                <TableCell align="right">City</TableCell>
                                <TableCell align="right">Water Rate (KSH)</TableCell>
                                <TableCell align="right">Elictricity Rate (KSH)</TableCell>
                                <TableCell align="right">MPESA Paybill</TableCell>
                                <TableCell align="right">Action</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {/* <TableCell component="th" scope="row">
                                        {row.date}
                                    </TableCell> */}
                                    <TableCell align="right">{row.property_name}</TableCell>
                                    <TableCell align="right">{row.number_of_units}</TableCell>
                                    <TableCell align="right">{row.city}</TableCell>
                                    <TableCell align="right">{row.water_rate}</TableCell>
                                    <TableCell align="right">{row.electricity_rate}</TableCell>
                                    <TableCell align="right">{row.mpesa_paybill}</TableCell>
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