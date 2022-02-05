import React, { useState } from 'react';
import './Register.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Grid, Container, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useAuth from '../../Hooks/useAuth';
import RegistrationNow from '../../shared/RegistrationNow/RegistrationNow';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CircularProgress from '@material-ui/core/CircularProgress';

const Register = () => {
    const [loginData, setLoginData] = useState();
    const [retypePassError, setRetypePassError] = useState(false);
    const { registerWithEmailPassword, logInWithEmailPassword, signInWithGoogle, isLogin, setIsLogin, loading, setLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    //get data from data field
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    //make registration
    const handleRegisterSubmit = e => {
        e.preventDefault()
        setRetypePassError(false);
        if (loginData.password !== loginData.password2) {
            setRetypePassError(true);
            return;
        }
        else {
            registerWithEmailPassword(loginData.email, loginData.password, loginData.name, navigate)
                .then(result => {
                    toast.success("Registration Successful..!", {
                        theme: "colored"
                    });
                    navigate(redirect_url);
                })
                //handle registration error
                .catch((error) => {
                    if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                        toast.error("Invalid..!,Email Already used!", {
                            theme: "colored"
                        });
                        return;
                    }
                    else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                        toast.error("Invalid..!, Password should be at least 6 characters", {
                            theme: "colored"
                        });
                        return;
                    }
                    else {
                        toast.error("Invalid..!, Email or Password format", {
                            theme: "colored"
                        });
                        return;
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        }

        e.preventDefault();
    }
    //log in with registered email
    const handleLoginWithEmailPass = e => {
        e.preventDefault()
        logInWithEmailPassword(loginData.email, loginData.password)
            .then(result => {
                toast.success("Login Successful..!", {
                    theme: "colored"
                });
                navigate(redirect_url);
            })
            .catch(error => {
                toast.error("Wrong email of password", {
                    theme: "colored"
                });
            })
            .finally(() => {
                setLoading(false);
            });
    }
    //log in with google account
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                toast.success("Login Successful..!", {
                    theme: "colored"
                });
                navigate(redirect_url);
            })
    }
    return (
        <div className='register'>
            <Header />
            <Container>
                <Grid md={6} sx={{ margin: 'auto' }}>
                    {!isLogin ?
                        <>
                            <form onSubmit={handleRegisterSubmit}>
                                <h1 className="title titleBar">Please Register..</h1>
                                <div className="name">
                                    <span className="formIcon">
                                        <PermIdentityIcon />
                                    </span>
                                    <input onBlur={handleOnBlur} required placeholder='Name' name='name' type="text" />
                                </div>
                                <div className="email">
                                    <span className="formIcon">
                                        <EmailIcon />
                                    </span>
                                    <input onBlur={handleOnBlur} required placeholder='Email' name='email' type="email" />
                                </div>
                                <Grid container columnSpacing={2}>
                                    <Grid item md={6} xs={12}>
                                        <div className="password">
                                            <span className="formIcon">
                                                <LockIcon />
                                            </span>
                                            <input onBlur={handleOnBlur} required placeholder='Password' type="password" name='password' />
                                        </div>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <div className="re-password">
                                            <span className="formIcon">
                                                <VpnKeyIcon />
                                            </span>
                                            <input onBlur={handleOnBlur} required placeholder='Confirm Password' type="password" name='password2' />
                                        </div>
                                    </Grid>
                                </Grid>
                                {retypePassError &&
                                    <Alert sx={{ mt: 2, mx: 'auto' }} severity="error">Password didn't Match — check it out!</Alert>
                                }
                                <button type='submit' className='primaryBtn registrationBtn'>{loading ? <CircularProgress style={{ width: '25px', height: '25px', color: '#fff' }} disableShrink /> : 'Register'}</button>
                            </form>
                            <div className="haveAccount">
                                <p onClick={() => setIsLogin(true)}>Already have an account.</p>
                            </div>
                        </>
                        :
                        <>
                            <form onSubmit={handleLoginWithEmailPass}>
                                <h1 className="title titleBar">Please Login..</h1>
                                <div className="email">
                                    <span className="formIcon">
                                        <EmailIcon />
                                    </span>
                                    <input name='email' onBlur={handleOnBlur} required placeholder='Email' type="email" />
                                </div>
                                <div className="password">
                                    <span className="formIcon">
                                        <LockIcon />
                                    </span>
                                    <input name='password' onBlur={handleOnBlur} required placeholder='Password' type="password" />
                                </div>
                                <button type='submit' className='primaryBtn registrationBtn'>{loading ? <CircularProgress style={{ width: '25px', height: '25px', color: '#fff' }} disableShrink /> : "Log In"}</button>
                            </form>
                            <div className="haveAccount">
                                <p onClick={() => setIsLogin(false)}>Have no account.</p>
                            </div>
                        </>
                    }
                    <div className="socialIcon">
                        <h3 className="title titleBar">{
                            !isLogin ? 'Registration' : 'Log In'
                        } With...</h3>
                        <div style={{ textAlign: 'center' }} className="icon">
                            <GoogleIcon onClick={handleGoogleLogin} />
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <LinkedInIcon />
                        </div>
                    </div>
                </Grid>
            </Container>
            <RegistrationNow />
            <Footer />
        </div >

    );
};

export default Register;