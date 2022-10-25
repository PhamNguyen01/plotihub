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
    ///Fetching Properties
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


    const [property_name, setProperty_name] = useState("");
    const [mpesa_paybill, setMpesa_paybill] = useState("");
    const [number_of_units, setNumber_of_units] = useState("");

    const [city, setCity] = useState("");
    const [water_rate, setWater_rate] = useState("");
    const [electricity_rate, setElectricity_rate] = useState("");
    const user_id = 7
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/properties", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                property_name,
                number_of_units,
                city,
                water_rate,
                electricity_rate,
                mpesa_paybill,
                user_id

                //   password_confirmation: passwordConfirmation,
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

                    <Button variant="outlined" onClick={handleClickOpen}>Add Property</Button>
                    <Button variant="outlined"> Add Unit </Button>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <form onSubmit={handleSubmit} >
                            <DialogTitle id="responsive-dialog-title">
                                {"Property Form"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    <p>Property Name</p>
                                    <input value={property_name}
                                        onChange={(e) => setProperty_name(e.target.value)}
                                        className='payment-reminders-input'
                                        placeholder='Property Name'></input>

                                    <p>Number of units</p>
                                    <input
                                        className='payment-reminders-input'
                                        value={number_of_units}
                                        onChange={(e) => setNumber_of_units(e.target.value)}
                                        placeholder='0'></input>

                                    <p>City</p>
                                    <input
                                        className='payment-reminders-input'
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder='City or nearest town...'></input>

                                    <p>Water Rate (optional)</p>
                                    <input
                                        className='payment-reminders-input'
                                        value={water_rate}
                                        onChange={(e) => setWater_rate(e.target.value)}
                                        placeholder='(Ksh per unit consumed)'></input>


                                    <p>Electricity Rate (optional)</p>
                                    <input
                                        className='payment-reminders-input'
                                        value={electricity_rate}
                                        onChange={(e) => setElectricity_rate(e.target.value)}
                                        placeholder='(Ksh per unit consumed)'></input>

                                    <p>Mpesa Paybill</p>
                                    <input
                                        className='payment-reminders-input'
                                        value={mpesa_paybill}
                                        onChange={(e) => setMpesa_paybill(e.target.value)}
                                        placeholder='M-pesa Paybill'></input>

                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button type="submit"
                                    variant="outlined"
                                    onClick={handleClose}
                                    autoFocus>Add Property</Button>
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
                            {property.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {/* <TableCell component="th" scope="row">
                                        {row.date}
                                    </TableCell> */}
                                    <TableCell align="right">{item.property_name}</TableCell>
                                    <TableCell align="right">{item.number_of_units}</TableCell>
                                    <TableCell align="right">{item.city}</TableCell>
                                    <TableCell align="right">{item.water_rate}</TableCell>
                                    <TableCell align="right">{item.electricity_rate}</TableCell>
                                    <TableCell align="right">{item.mpesa_paybill}</TableCell>
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