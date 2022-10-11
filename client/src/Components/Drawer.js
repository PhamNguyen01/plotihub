import * as React from 'react';
import '../App.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PaidIcon from '@mui/icons-material/Paid';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DashboardIcon from '@mui/icons-material/Dashboard';

const drawerWidth = 242;

export default function PermanentDrawerLeft() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List >
                    <p className='drawer'> Todo</p>
                    <p className='drawer'> Dashboard</p>
                    <p className='drawer'> Financials</p>
                    <p className='drawer'>Invoices</p>
                    <p className='drawer'>Payments</p>
                    <p className='drawer'>Expenses</p>
                    <p className='drawer'>Tenants</p>
                    <p className='drawer'>Properties</p>
                    <p className='drawer'>Property/Unit</p>
                    <p className='drawer'>Utilities</p>
                    <p className='drawer'>Maintenance</p>
                    <p className='drawer'>Reports</p>
                    <p className='drawer'>Communication</p>
                    <p className='drawer'>Settings</p>
                </List>
                {/* <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> */}
                <Divider />
               
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
             
            </Box>
        </Box>
    );
}
