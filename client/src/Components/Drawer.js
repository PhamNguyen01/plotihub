import * as React from 'react';
import '../App.css'
import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import 'react-dropdown/style.css';
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
import PersonIcon from '@mui/icons-material/Person';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 242;
const options = [
    'one', 'two', 'three'
];
const defaultOption = options[0];

export default function PermanentDrawerLeft() {
    const [open, setOpen] = React.useState(true);
    const [opened, setOpened] = React.useState(true);


    const handleClick = () => {
        setOpen(!open);
    };

    const handleProperty = () => {
        setOpened(!opened);
    };
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
                    {/* To do starts */}
                    <ListItemButton>
                        <ListItemIcon>
                            <NotificationsActiveIcon />
                        </ListItemIcon>
                        <ListItemText primary="To Do" />
                    </ListItemButton>

                    {/* To do ends  */}
                    <Divider />

                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>

                    <Divider />

                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <PaidIcon />
                        </ListItemIcon>
                        <ListItemText primary="Financials" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                {/* <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon> */}
                                <ListItemText primary="Invoices" />
                            </ListItemButton>

                            <ListItemButton sx={{ pl: 4 }}>
                                {/* <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon> */}
                                <ListItemText primary="Payments" />
                            </ListItemButton>

                            <ListItemButton sx={{ pl: 4 }}>
                                {/* <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon> */}
                                <ListItemText primary="Expenses" />
                            </ListItemButton>

                        </List>
                    </Collapse>
                    <Divider />

                    <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tenants" />
                    </ListItemButton>

                    <Divider />

                    <ListItemButton onClick={handleProperty}>
                        <ListItemIcon>
                            <MapsHomeWorkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Properties" />
                        {opened ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={opened} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                {/* <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon> */}
                                <ListItemText primary="Property/Unit" />
                            </ListItemButton>

                            <ListItemButton sx={{ pl: 4 }}>
                                {/* <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon> */}
                                <ListItemText primary="Utilities" />
                            </ListItemButton>

                            <ListItemButton sx={{ pl: 4 }}>
                                {/* <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon> */}
                                <ListItemText primary="Maintenance" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <Divider />

<ListItemButton>
                        <ListItemIcon>
                            <InsertChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Communication" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
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
