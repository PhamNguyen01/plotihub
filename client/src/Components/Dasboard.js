import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../App.css'
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import SignalWifiBadOutlinedIcon from '@mui/icons-material/SignalWifiBadOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ResponsiveDialog from './Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
    return (
        <div>
 
               <Stack className='buttons' spacing={2} direction="row">
                <ResponsiveDialog />

                <div>
                    <Button className='button' variant="outlined" onClick={handleClickOpen}>
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
            </Stack>

            <div className='card'>
                <div className='cards'>
                    <div className='card-details'>
                        <div className='card-info'>
                            <WifiOutlinedIcon sx={{ fontSize: 60 }} />
                            <p>Unpaid Tenant Balance</p>
                            <h3>10.00 KSH</h3>
                            <p>Total</p>
                        </div>

                    </div >
                    <div className='card-details'>
                        <div className='card-info'>
                            <SignalWifiBadOutlinedIcon sx={{ fontSize: 60 }} />
                            <p>Payments</p>
                            <h3>0 KSH</h3>
                            <p>October</p>
                        </div>

                    </div >
                    <div className='card-details'>
                        <div className='card-info'>
                            <AccountBalanceWalletIcon sx={{ fontSize: 60 }} />
                            <p>Total Vacancies</p>
                            <h3> 0</h3>
                            <p>0 Occupied</p>
                        </div>

                    </div >

                    <div className='card-details'>
                        <div className='card-info'>
                            <AccountBalanceIcon sx={{ fontSize: 60 }} />
                            <p>Billing Address</p>
                            <h3>Bank Acc</h3>
                        </div>

                    </div >
                </div>

            </div>
        </div>
    );
}

