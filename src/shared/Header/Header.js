import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Button from '@mui/material/Button';
import logo from '../../media/logo2.png';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const { setIsLogin, user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut();
        toast.success("Log Out Successful..!", {
            theme: "colored"
        });
    }
    return (
        <div className='header'>
            <div className="nav-bar">
                <Link to='/home'>
                    <div className="logo">
                        <img style={{ width: '100%' }} src={logo} alt="logo" />
                    </div>
                </Link>
                <div className={`nav-rightM ${toggle ? 'toggleBtnActive' : ''}`}>
                    <div className='nav-right'>
                        <NavLink
                            className='navItem'
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "#4747F3" : "",
                                    color: isActive ? "white" : ""
                                };
                            }}
                            to='/home'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className='navItem'
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "#4747F3" : "",
                                    color: isActive ? "white" : ""
                                };
                            }}
                            to='/services'
                        >
                            Services
                        </NavLink>
                        <NavLink
                            className='navItem'
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "#4747F3" : "",
                                    color: isActive ? "white" : ""
                                };
                            }}
                            to='/contactUS'
                        >
                            Contact Us
                        </NavLink>


                        {user?.email ?
                            <>
                                <NavLink
                                    className='navItem'
                                    to='/dashboard'
                                >
                                    <span style={{ display: 'flex', alignItems: 'center' }}><img className='avatar' src="https://cdn.mypanel.link/770smr/jsq3r7guazj336du.png" alt="profile" />{user.displayName && user.displayName}</span>
                                </NavLink>
                                <NavLink to='/home'>
                                    <button onClick={handleLogOut} className='primaryBtn logOut'>Log Out</button>
                                </NavLink>
                            </>
                            :
                            <NavLink to='/register'>
                                <button onClick={() => setIsLogin(true)} className='secondaryBtn'>Log In</button>
                                <button onClick={() => setIsLogin(false)} className='primaryBtn'>Register</button>
                            </NavLink>
                        }

                    </div>
                </div>
                <div className="toggleBtn">
                    <Button onClick={() => setToggle(!toggle)} className="toggleBtn" sx={{ color: 'brown', cursor: 'pointer' }}><DehazeIcon /></Button>
                </div>
            </div>
        </div >
    );
};

export default Header;