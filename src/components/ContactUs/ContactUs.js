import React from 'react';
import { Button, Grid, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import RoomIcon from '@mui/icons-material/Room';
import SendIcon from '@mui/icons-material/Send';
import './ContactUs.css';
import { useLocation } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';

const ContactUs = () => {
    const location = useLocation();
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm(
            'service_50f022t',
            'template_68k1ibi',
            e.target,
            'user_WDIUH1oqKRxi2EalvrmMt')
            .then((result) => {
                if (result.text === 'OK') {
                    e.target.reset();
                    toast.success('Your Email Send Successfully', {
                        theme: "colored"
                    });
                }
            }, (error) => {
            });
    }

    return (
        <>
            {location.pathname === '/contactUS' && <Header />}
            <div style={{ paddingBottom: '5rem' }} className='contactPage container'>
                <div className='title-section'>
                    <h1>contact <span>us</span></h1>
                    <span className='title-bg'>connect</span>
                </div>
                <Container>
                    <Grid container columnSpacing={2}>
                        <Grid item md={6} xs={12}>
                            <div>
                                <h2 data-aos='slide-down'>Leave Me A Message...</h2>
                                <p data-aos='zoom-in' className='fw-bold text-secondary'>Learn any programming that you want to and loved to code. We have our best qualified programmers to make you success on your goal... </p>
                                <div style={{ width: 'fit-content' }}>
                                    <Grid sx={{ alignItems: 'center' }} container columnSpacing={2} data-aos='flip-left'>
                                        <Grid item >
                                            <div className='icon'><MailIcon /></div>
                                        </Grid>
                                        <Grid item >
                                            <p>Email Address :</p>
                                            <p>info@growtharrangebd.com</p>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ alignItems: 'center' }} container columnSpacing={2} data-aos='flip-left'>
                                        <Grid item>
                                            <div className='icon'><PhoneInTalkIcon /></div>
                                        </Grid>
                                        <Grid item>
                                            <p>Phone Number :</p>
                                            <p>+8801970797533</p>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{ alignItems: 'center' }} columnSpacing={2} data-aos='flip-right'>
                                        <Grid item>
                                            <div className='icon'><RoomIcon /></div>
                                        </Grid>
                                        <Grid item>
                                            <p>Our Location :</p>
                                            <p>Dhaka, Bangladesh</p>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div style={{ margin: 'auto', width: 'fit-content' }}>
                                    <ui className='socialIcon'>
                                        <li data-aos='slide-up' >
                                            {/* <a href="https://www.facebook.com/yasin.ahmed.5053/" target="_blank" rel='noreferrer'> */}
                                            <div className='icon'><WhatsAppIcon /></div>
                                            {/* </a> */}
                                        </li>
                                        <li data-aos='slide-left' >
                                            {/* <a href="" target="_blank" rel='noreferrer'> */}
                                            <div className='icon'><FacebookIcon /></div>
                                            {/* </a> */}
                                        </li>
                                        <li data-aos='slide-left' >
                                            {/* <a href="" target="_blank" rel='noreferrer'> */}
                                            <div className='icon'><InstagramIcon /></div>
                                            {/* </a> */}
                                        </li>
                                    </ui>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <div className='message'>
                                <form onSubmit={sendEmail}>
                                    <input data-aos="zoom-in" required placeholder='Your Name*' type="text" name="from_name" />
                                    <input data-aos="zoom-in" required placeholder='Subject*' type="text" name="subject" />
                                    <input data-aos="zoom-in" required placeholder='Email Address*' type="email" name="from_email" />
                                    <textarea data-aos="zoom-in" name="message" required placeholder='Write Your Message*' ></textarea>
                                    <Button type='submit' data-aos='zoom-out' sx={{ fontWeight: 'bold' }} variant="contained"><SendIcon /> Send Email</Button>
                                </form>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div >
            {location.pathname === '/contactUS' && <Footer />}
        </>
    );
};

export default ContactUs;