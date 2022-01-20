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
                <Grid container sx={{ justifyContent: 'space-around' }}>
                    <Grid md={3} style={{ textAlign: 'center' }}>
                        <img style={{ width: "150px", cursor: 'pointer' }} src={`${logo}`} alt="logo" />
                        <p style={{ marginTop: '0' }}>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod</p>
                        <div className="icon">
                            <FacebookIcon />
                            <InstagramIcon />
                            <YouTubeIcon />
                            <TwitterIcon />
                            <LinkedInIcon />
                        </div>
                    </Grid>
                    <Grid md={3}>
                        <h3 className='subTitle'>Quick Links</h3>
                        <ul className='list'>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Projects</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>
                    </Grid>
                    <Grid md={3}>
                        <h3 className='subTitle'>Useful Links</h3>
                        <ul className='list'>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>Disclaimer</li>
                            <li>Support</li>
                            <li>FAQ</li>
                        </ul>
                    </Grid>
                    <Grid md={3}>
                        <h3 className='subTitle'>Make Appointment</h3>
                        <ul className='list'>
                            <li><i className="far fa-clock" style={{ marginRight: '8px' }}></i>9AM - 5PM , Monday - Saturday</li>
                            <li><i className="fas fa-phone-volume" style={{ marginRight: '8px' }}></i>+88023344XXXXX</li>
                            <li><i className="far fa-envelope" style={{ marginRight: '8px' }}></i>example@gmail.com</li>
                        </ul>
                    </Grid>
                </Grid>
                <div className="bottomFooter">
                    <p >Textile & Garment Industry Template Kit by Jegtheme</p>
                    <p >Copyright &copy; 2021. All rights reserved.</p>
                </div>
            </Container>
        </div >
    );
};

export default Footer;