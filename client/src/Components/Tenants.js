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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

export default function Tenants() {
    const [tenants, setTenant] = useState([]);
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




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

    const [property_id, setProperty_id] = useState("");
    const [balance, setBalance] = useState("");
    const [unit_name, setUnit_name] = useState("");
    const [tenant_name, setTenant_name] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [deposit, setDeposit] = useState("");
    const [account_number, setAccount_number] = useState("");

    const handleChange = (event) => {
        setProperty_id(event.target.value);
    }

    // POST request to tenants table
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/tenants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                property_id,
                unit_name,
                tenant_name,
                phone_number,
                deposit,
                balance,
                account_number
            }),
        })
            .then((r) => r.json())
        // .then((user) => onLogin(user));
        console.log("POST MADE")

    }


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
                        {/* Add tenant form */}
                        <form onSubmit={handleSubmit} >
                            <DialogTitle id="responsive-dialog-title">
                                {"Tenant Form"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>

                                    <p> Property</p>
                                    <select className='property-dropdown'
                                        onChange={e => setProperty_id(e.target.value)}
                                    >
                                        {property.map((item) => (

                                            <option value={item.property_id}>{item.id}<p>{item.property_name}</p></option>
                                        ))}
                                    </select>
                                    <p>Unit</p>
                                    <input value={unit_name}
                                        onChange={(e) => setUnit_name(e.target.value)}
                                        className='payment-reminders-input'
                                        placeholder='Unit Name/ Number'></input>
                                    <p>Tenant Name</p>
                                    <input value={tenant_name}
                                        onChange={(e) => setTenant_name(e.target.value)}
                                        className='payment-reminders-input'
                                        placeholder='Tenant Name'></input>


                                    <p>Phone Number</p>
                                    <input
                                        value={phone_number}
                                        onChange={(e) => setPhone_number(e.target.value)}
                                        className='payment-reminders-input'
                                        placeholder='Phone Number'></input>


                                    <p>Deposit</p>
                                    <input
                                        value={deposit}
                                        onChange={(e) => setDeposit(e.target.value)}
                                        className='payment-reminders-input'
                                        placeholder='Deposit'></input>

                                    <p>Balance</p>
                                    <input
                                        value={balance}
                                        onChange={(e) => setBalance(e.target.value)}
                                        className='payment-reminders-input'
                                        placeholder='Balance'></input>



                                    <p>Account Number</p>
                                    <input
                                        value={account_number}
                                        onChange={(e) => setAccount_number(e.target.value)}
                                        className='payment-reminders-input'
                                        placeholder='Account Number'></input>

                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>

                                <Button type="submit"
                                    variant="outlined"
                                    onClick={handleClose}
                                    autoFocus>Add Tenant
                                </Button>

                            </DialogActions>
                        </form>

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
                            {/* Maping tenant data to table */}
                            {tenants.map((item) => (
                                <TableRow
                                    key={tenants.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">{item.tenant_name}</TableCell>
                                    <TableCell align="right">{item.property.property_name}</TableCell>
                                    <TableCell align="right">{item.unit_name}</TableCell>
                                    <TableCell align="right">{item.phone_number}</TableCell>
                                    <TableCell align="right">{item.deposit}</TableCell>
                                    <TableCell align="right">{item.balance}</TableCell>
                                    <TableCell align="right">{item.account_number}</TableCell>
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