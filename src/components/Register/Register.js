import React, { useState } from 'react';
import './Register.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Grid, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const Register = () => {
    const [isLogin, setIsLogin] = useState()
    //toggle registration and login form
    const toggleLoginAndOut = e => {
        setIsLogin(e.target.checked);
    }
    return (
        <div className='register'>
            <Container>
                <Grid md={6} sx={{ margin: 'auto' }}>
                    {!isLogin ?
                        <form action="">
                            <h1 className="title titleBar">Please Register..</h1>
                            <div className="name">
                                <span className="formIcon">
                                    <PermIdentityIcon />
                                </span>
                                <input placeholder='Name' type="text" />
                            </div>
                            <div className="email">
                                <span className="formIcon">
                                    <EmailIcon />
                                </span>
                                <input placeholder='Email' type="email" />
                            </div>
                            <Grid container columnSpacing={2}>
                                <Grid item md={6} xs={12}>
                                    <div className="password">
                                        <span className="formIcon">
                                            <LockIcon />
                                        </span>
                                        <input placeholder='Password' type="email" />
                                    </div>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <div className="re-password">
                                        <span className="formIcon">
                                            <VpnKeyIcon />
                                        </span>
                                        <input placeholder='Confirm Password' type="email" />
                                    </div>
                                </Grid>
                            </Grid>
                            <button className='primaryBtn registrationBtn'>Register</button>
                        </form>
                        :
                        <form action="">
                            <h1 className="title titleBar">Please Login..</h1>
                            <div className="email">
                                <span className="formIcon">
                                    <EmailIcon />
                                </span>
                                <input placeholder='Email' type="email" />
                            </div>
                            <div className="password">
                                <span className="formIcon">
                                    <LockIcon />
                                </span>
                                <input placeholder='Password' type="email" />
                            </div>
                            <button className='primaryBtn registrationBtn'>Log In</button>
                        </form>
                    }
                    <div className="form-check">
                        <input required onChange={toggleLoginAndOut} type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Already have an account.</label>
                    </div>
                </Grid>
            </Container>
        </div >
    );
};

export default Register;