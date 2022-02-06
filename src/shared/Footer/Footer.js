import { Container, Grid } from '@mui/material';
import React from 'react';
import logo from '../../media/logo2.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Container style={{ padding: '60px 0' }}>
                <Grid container justifyContent="center">
                    <Grid item md={3} sm={6} xs={12} sx={{ textAlign: 'center' }}>
                        <img style={{ width: "150px", cursor: 'pointer' }} src={`${logo}`} alt="logo" />
                        <p style={{ marginTop: '0' }}>Now, You can get connect with<br />GROWTH Arrange BD<br />for Grow your business.</p>
                        <div className="icon">
                            <FacebookIcon />
                            <InstagramIcon />
                            <YouTubeIcon />
                            <TwitterIcon />
                            <LinkedInIcon />
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <h3 className='subTitle'>Quick Links</h3>
                            <ul className='list'>
                                <li>Services</li>
                                <li>Projects</li>
                                <li>Pricing</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <h3 className='subTitle'>Useful Links</h3>
                            <ul className='list'>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                                <li>Disclaimer</li>
                                <li>Support</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <h3 className='subTitle'>Make Appointment</h3>
                            <ul className='list'>
                                <li><i className="far fa-clock" style={{ marginRight: '8px' }}></i>9AM - 5PM , Monday - Saturday</li>
                                <li><i className="fas fa-phone-volume" style={{ marginRight: '8px' }}></i>+8801970797533</li>
                                <li><i className="far fa-envelope" style={{ marginRight: '8px' }}></i>growtharrange@gmail.com</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
                <div className="bottomFooter">
                    <p >GROWTH Arrange BD-Your Business & Customer Influencer Helper</p>
                    <p >Copyright &copy; 2022. All rights reserved.</p>
                </div>
            </Container>
        </div >
    );
};

export default Footer;