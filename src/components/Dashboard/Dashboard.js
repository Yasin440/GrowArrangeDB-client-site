import React, { useState, useEffect } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
import logo from '../../media/logo2.png';
import logo1 from '../../media/logo1.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CampaignIcon from '@mui/icons-material/Campaign';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import EditOffIcon from '@mui/icons-material/EditOff';
import AddTaskIcon from '@mui/icons-material/AddTask';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    ...(!open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${theme.spacing(7)})`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${theme.spacing(9)})`,
        },
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
const active = ({ isActive }) => {
    return {
        backgroundColor: isActive ? "#362682" : "",
        borderLeft: isActive ? "5px solid red" : ""
    };
};

export default function Dashboard() {
    const { admin, logOut, user, isLoading } = useAuth();
    const [balance, setBalance] = useState();
    const [open, setOpen] = useState(true);
    //user current balance
    useEffect(() => {
        fetch(`https://agile-coast-57726.herokuapp.com/user/allUsers/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.balance) {
                    setBalance(data.balance);
                    return;
                } else {
                    setBalance(parseFloat(0).toFixed(2));
                }
            })
    }, [user?.email, isLoading])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogOut = () => {
        logOut();
        toast.success("Log Out Successful..!", {
            theme: "colored"
        });
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: 'black' }} position="fixed" open={open}>
                <Toolbar>
                    {!open ? <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                        :
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerClose}
                            edge="start"
                        >
                            <ChevronLeftIcon />
                        </IconButton>}

                    <Typography variant="h6" noWrap component="div">
                        Growth Arrange
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer className='dashboardDrawer' variant="permanent" open={open}>
                <div className="sideBarProfile">
                    {open &&
                        <div className="sideBarHeader">
                            <img width='60%' src={logo1} alt="logo" />
                        </div>
                    }
                    <div className="sideBarUser">
                        {open ?
                            <div className='profile'>
                                <div className='profileImg'>
                                    <Link to='/home'>
                                        <img width='100%' src="https://cdn.mypanel.link/770smr/jsq3r7guazj336du.png" alt="profile" />
                                    </Link>
                                </div>
                                <div className="welcome">Welcome</div>
                                <div className="name">
                                    {user?.displayName || user?.email}
                                </div>
                                <Link to='/dashboard/addBalance'>
                                    <div className={`balance ${balance < 100 && 'lowBalance'}`}>balance: &#2547; {balance || 0.00}</div>
                                </Link>
                            </div>
                            :
                            <div className='profileImg'>
                                <Link to='/home'>
                                    <img width='100%' src={logo} alt="logo" />
                                </Link>
                            </div>

                        }

                    </div>
                </div>
                <Divider />
                <ul>
                    <li>
                        <NavLink to='/home'>
                            <HomeIcon />
                            {open && <span>Home</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to=''>
                            <CampaignIcon />
                            {open && <span>News & updates</span>}
                        </NavLink>
                    </li>
                    {admin &&
                        <>
                            <li>
                                <NavLink
                                    style={active}
                                    to='/dashboard/manageOrder'>
                                    <EditOffIcon />
                                    {open && <span>Manage order</span>}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    style={active}
                                    to='/dashboard/addServices'>
                                    <AddBoxIcon />
                                    {open && <span>Add Services</span>}
                                </NavLink>
                            </li>
                        </>
                    }

                    <li>
                        <NavLink
                            style={active}
                            to='/dashboard/allServices'>
                            <AddTaskIcon />
                            {open && <span>Services</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={active}
                            to='/dashboard/addBalance'>
                            <AccountBalanceWalletIcon />
                            {open && <span>Add Balance</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={active}
                            to='/dashboard/myOrders'>
                            <AssignmentIcon />
                            {open && <span>My orders</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={active}
                            to='/dashboard/tickets'>
                            <ConfirmationNumberIcon />
                            {open && <span>Tickets</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={handleLogOut}
                            style={active}
                            to='/'>
                            <LogoutIcon />
                            {open && <span>Log Out</span>}
                        </NavLink>
                    </li>
                </ul>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Outlet />
            </Box>
        </Box >
    );
}
