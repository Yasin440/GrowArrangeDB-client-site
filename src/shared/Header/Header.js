import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Button from '@mui/material/Button';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='header'>
            <div className="nav-bar">
                <p className="logo">My Subject</p>
                <div className={`nav-right ${toggle ? 'toggleBtnActive' : ""}`}>
                    <NavLink
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
                    <NavLink className='registerBtn' to='/register'>
                        Register
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