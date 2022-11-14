import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import '../App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ResponsiveDialog from './Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function BasicButtons() {
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
    const [user, setUser] = useState(null);

    //Keeping user logged in
    useEffect(() => {
        fetch("http://localhost:3000/me").then((response) => {
            if (response.ok) {
                response.json().then((user) => setUser(user));
            }
        });
    }, []);

    // if (user) {
    //   <h2>Welcome, {user.username}!</h2>;
    // } else {
    //    <LoginForm onLogin={setUser} />;
    // }



    return (
        <div>

            <Stack className='buttons' spacing={2} direction="row">
                <ResponsiveDialog />

                <div>
                    <Button className='button' variant="outlined" >
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
                {/* <Button onClick={handleClickOpen} className='button' variant="outlined">Record Payment</Button> */}

                <Button className='button' variant="outlined">Add Utilities</Button>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select className='dropdown'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Tassia Hill</MenuItem>
                            <MenuItem value={20}>Tassi Estate</MenuItem>
                            <MenuItem value={30}>Magiq Square</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Stack>

            <div className='card'>
                <div className='cards'>
                    <div className='card-details'>
                        <div className='card-info'>
                            <p>Unpaid Tenant Balance</p>
                            <h3>10.00 KSH</h3>
                            <p>Total</p>
                        </div>

                    </div >
                    <div className='card-details'>
                        <div className='card-info'>
                            <p>Payments</p>
                            <h3>0 KSH</h3>
                            <p>October</p>
                        </div>

                    </div >
                    <div className='card-details'>
                        <div className='card-info'>
                            <p>Total Vacancies</p>
                            <h3> 0</h3>
                            <p>0 Occupied</p>
                        </div>

                    </div >

                    <div className='card-details'>
                        <div className='card-info'>
                            <p>Billing Address</p>
                            <h3>Bank Acc</h3>
                        </div>

                    </div >
                </div>

            </div>
        </div>
    );
}

