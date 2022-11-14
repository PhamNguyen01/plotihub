import React, { useEffect, useState } from 'react';
import '../App.css'
import PermanentDrawerLeft from './Drawer';
import Button from '@mui/material/Button';
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

export default function Utilties() {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //Fetching utilities data
    const [utility, setUtility] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/utilities")
            .then((response) => response.json())
            .then((data) => {
                setUtility(data);
                console.log(data)
            }
            )
        // .then((data) => {
        //     console.log(data)
        // })
    }, []);


    return (
        <div>
            <div className='invoice-left-side'>
                <PermanentDrawerLeft />
                <div className='payment-buttons'>

                    <Button variant="outlined" onClick={handleClickOpen}>Record Utility</Button>
                    <Button variant="outlined"> Bulk Upload Utilies </Button>
                    {/* Utlity form */}
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {"Utility Form"}
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
                            <Button variant="outlined" onClick={handleClose} autoFocus>Add Utility</Button>
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

            <div className='utilities-table'>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                {/* <TableCell align="right">Property</TableCell> */}
                                <TableCell align="right">Property</TableCell>
                                <TableCell align="right">Unit</TableCell>
                                <TableCell align="right">Item</TableCell>
                                <TableCell align="right">Previous Reading</TableCell>
                                <TableCell align="right">Current Reading</TableCell>
                                <TableCell align="right">Invoice</TableCell>
                                <TableCell align="right">Action</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Maping Utilities data to table */}
                            {utility.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.date}
                                    </TableCell>
                                    <TableCell align="right">{item.property_name}</TableCell>
                                    <TableCell align="right">{item.unit_name}</TableCell>
                                    <TableCell align="right">{item.utility_item}</TableCell>
                                    <TableCell align="right">{item.previous_reading}</TableCell>
                                    <TableCell align="right">{item.current_reading}</TableCell>
                                    <TableCell align="right">{item.invoice}</TableCell>
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