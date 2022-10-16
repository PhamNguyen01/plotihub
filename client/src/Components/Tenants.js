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

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function createData(tenant_name, property_name, unit_name, phone_number, deposit, balance, account_number) {
    return { tenant_name, property_name, unit_name, phone_number, deposit, balance, account_number };
}

const rows = [
    createData('Carl Agesa', 'Magiq Square', 'block D', '07212531733', 5000, 5000, 212123),
    createData('David Park', 'Magiq Square', 'block D', '07212531733', 5000, 5000, 212123)

];



export default function Tenants() {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [tenant, setTenant] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/tenants")
            .then((response) => response.json())
            .then((data) => {
                setTenant(data);
                console.log(data)

            }
            )
        // .then((data) => {
        //     console.log(data)
        // })
    }, []);


    const [property, setProperty] = useState([]);


useEffect(() => {
    fetch("http://localhost:3000/properties")
        .then((response) => response.json())
        .then((data) => {
            setProperty(data);
            console.log(data)

        }
        )
    // .then((data) => {
    //     console.log(data)
    // })
}, []);


const [selects, setSelects]= useState();

    return (
        <div>
            <div className='invoice-left-side'>
                <PermanentDrawerLeft />
                <div className='payment-buttons'>

                    <Button variant="outlined" onClick={handleClickOpen}>Add Tenant</Button>
                    <Button variant="outlined"> Send Message </Button>
                    <Button variant="outlined"> Send Reminders</Button>
                    <Button variant="outlined"> Shift Tenants</Button>
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
                                <div>
                                    {/* <h1>{selects}</h1> */}
                                    <select value={selects} onChange={e=>setSelects(e.target.value)}>
                                    {property.map((item) => (
 
                                        <option>{item.property_name}</option>
                                        // <option>Mango</option>
                                        // <option>Orange</option>
                                        ))}

                                    </select>
                                </div>
                                <p>Select Property</p>

                                {/* <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Name</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={setSelects} 
                                            // value={age}
                                            // label="Age"
                                            
                                        >
                                                                        {property.map((item) => (

                                            <MenuItem onChange={e=>setSelects(e.target.value)} value={selects}>{item.property_name}</MenuItem>
                                            ))}
                                        
                                        </Select>
                                    </FormControl>
                                </Box> */}

                                <p>Select Unit</p>
                                {/* <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box> */}



                                <p>First Name</p>  <input className='payment-reminders-input' placeholder='First Name'></input>
                                <p>Last Name</p>  <input className='payment-reminders-input' placeholder='Last Name'></input>
                                <p>Phone Number</p>  <input className='payment-reminders-input' placeholder='Phone Number'></input>
                                <p>Deposit</p>  <input className='payment-reminders-input' placeholder='Phone Number'></input>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="outlined" onClick={handleClose} autoFocus>Add Tenant</Button>
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

                        <p>Total Tenants</p>
                        <h3>0</h3>
                    </div>

                </div>

            </div>

            <div className='invoice-table'>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Tenant Name</TableCell>
                                <TableCell align="right">Property Name</TableCell>
                                <TableCell align="right">Unit ID/Name</TableCell>
                                <TableCell align="right">Phone Number</TableCell>
                                <TableCell align="right">Deposit</TableCell>
                                <TableCell align="right">Balance</TableCell>
                                <TableCell align="right">Account Number</TableCell>
                                <TableCell align="right">Action</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tenant.map((item) => (
                                <TableRow
                                    key={tenant.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">{item.tenant_name}</TableCell>
                                    <TableCell align="right">{item.property_name}</TableCell>
                                    <TableCell align="right">{item.unit_name}</TableCell>
                                    <TableCell align="right">{item.phone_number}</TableCell>
                                    <TableCell align="right">{item.deposit}</TableCell>
                                    <TableCell align="right">{item.balance}</TableCell>
                                    <TableCell align="right">{item.account_number}</TableCell>
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