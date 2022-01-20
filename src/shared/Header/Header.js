import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Button from '@mui/material/Button';
import logo from '../../media/logo2.png';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='header'>
            <div className="nav-bar">
                <img style={{ width: '5%' }} src={logo} alt="logo" />
                <div className={`nav-right ${toggle ? 'toggleBtnActive' : ""}`}>
                    <NavLink
                        className='navItem'
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#362682" : "",
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
                                backgroundColor: isActive ? "#362682" : "",
                                color: isActive ? "white" : ""
                            };
                        }}
                        to='/addSubject'
                    >
                        Add Subject
                    </NavLink>
                    <NavLink
                        className='navItem'
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#362682" : "",
                                color: isActive ? "white" : ""
                            };
                        }}
                        to='/about'
                    >
                        About
                    </NavLink>
                    <NavLink
                        className='navItem'
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#362682" : "",
                                color: isActive ? "white" : ""
                            };
                        }}
                        to='/contactUS'
                    >
                        Contact Us
                    </NavLink>
                    <NavLink to='/register'>
                        <button className='secondaryBtn'>Log In</button>
                        <button className='primaryBtn'>Register</button>
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