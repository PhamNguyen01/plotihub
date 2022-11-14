import React, { useEffect, useState } from 'react';
import ServerRequestDatePicker from './Date';
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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

export default function Payment() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    ///Fetching payments data
    const [payment, setPayment] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/payments")
            .then((response) => response.json())
            .then((data) => {
                setPayment(data);
                console.log(data)

            }
            )
        // .then((data) => {
        //     console.log(data)
        // })
    }, []);

    const [properties, setProperties] = useState();
    const [tenants, setTenants] = useState();

    return (
        <div>
            <div className='payment-left-side'>
                {/* Left drawer */}
                <PermanentDrawerLeft />
                <div className='payment-buttons'>
                    {/* Add payment form */}
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Record Payment
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
                                <p>Select Unit</p>
                                <select className='property-dropdown' value={properties} onChange={e => setProperties(e.target.value)}>
                                    {payment.map((item) => (

                                        <option>{item.unit_name}</option>

                                    ))}

                                </select>
                                <p>Select Tenant</p>

                                <select className='property-dropdown' value={tenants} onChange={e => setTenants(e.target.value)}>
                                    {payment.map((item) => (

                                        <option>{item.tenant_name}</option>

                                    ))}

                                </select>
                                <p>Paid Amount</p>  <input className='payment-reminders-input' placeholder='Enter Paid Amount e.g 10000'></input>
                                <p>Payment Date</p>  < ServerRequestDatePicker />
                                <p>Status</p>

                                <select className='property-dropdown' value={tenants} onChange={e => setTenants(e.target.value)}>
                                    {payment.map((item) => (

                                        <option>{item.status}</option>

                                    ))}
                                </select>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="outlined" onClick={handleClose} autoFocus>Add Paymentr</Button>
                        </DialogActions>
                    </Dialog>
                    <Button variant="outlined"> Bulk Upload Payment </Button>
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
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell align="right">Payment ID/Number</TableCell>
                                <TableCell align="right">Tenant</TableCell>
                                <TableCell align="right">Item</TableCell>
                                <TableCell align="right">Property (Unit)</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Amount to pay (kshs)</TableCell>
                                <TableCell align="right">Action</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Maping payments data to table */}
                            {payment.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.date}
                                    </TableCell>
                                    <TableCell align="right">{item.payment_number}</TableCell>
                                    <TableCell align="right">{item.tenant_name}</TableCell>
                                    <TableCell align="right">{item.item}</TableCell>
                                    <TableCell align="right">{item.unit_name}</TableCell>
                                    <TableCell align="right">{item.status}</TableCell>
                                    <TableCell align="right">{item.paid_amount}</TableCell>
                                    <TableCell align="right">
                                        <Stack direction="row" spacing={0.5}>
                                            <Button variant="outlined" startIcon={<DeleteIcon />}>
                                                Del
                                            </Button>
                                            <Button variant="contained" endIcon={<EditIcon />}>
                                                Edit
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    )

}