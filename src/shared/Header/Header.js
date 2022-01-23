import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Button from '@mui/material/Button';
import logo from '../../media/logo2.png';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    //state fot burger toggle for mobile nav
    const [toggle, setToggle] = useState(false);
    //toggle registration and login form
    const { setIsLogin } = useAuth();
    return (
        <div className='header'>
            <div className="nav-bar">
                <div className="logo">
                    <img style={{ width: '100%' }} src={logo} alt="logo" />
                </div>
                <div className={`nav-right ${toggle ? 'toggleBtnActive' : ""}`}>
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
                        to='/aboutUs'
                    >
                        About Us
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
                    <NavLink
                        className='navItem'
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#4747F3" : "",
                                color: isActive ? "white" : ""
                            };
                        }}
                        to='/dashboard'
                    >
                        Dashboard
                    </NavLink>
                    <NavLink to='/register'>
                        <button onClick={() => setIsLogin(true)} className='secondaryBtn'>Log In</button>
                        <button onClick={() => setIsLogin(false)} className='primaryBtn'>Register</button>
                    </NavLink>
                </div>
                <div className="toggleBtn">
                    <Button onClick={() => setToggle(!toggle)} className="toggleBtn" sx={{ color: 'brown', cursor: 'pointer' }}><DehazeIcon /></Button>
                </div>
            </div>
        </div >
    );
};

export default Header;