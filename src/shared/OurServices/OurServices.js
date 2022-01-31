import React from 'react';
import './OurServices.css';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CoffeeIcon from '@mui/icons-material/Coffee';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const OurServices = () => {
    return (
        <div className='ourServices' style={{ padding: '5rem 0' }}>
            <div style={{ marginBottom: '8rem' }}><h1 className="title titleBar">Our Crush Services..</h1></div>
            <Container>
                <Grid container spacing={3} sx={{ width: '100%', marginBottom: '3rem' }}>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, py: 2, cursor: 'pointer' }}
                            data-aos='flip-up'
                            className='card'>
                            <CardContent>
                                <div className='serviceLogoTitle'>
                                    <FacebookIcon className='serviceIcon' />
                                    <Typography sx={{ color: '#0779E4', fontWeight: 600, my: 3 }} variant="h6" gutterBottom component="div">Web Development
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography sx={{ fontWeight: '550', color: '#362682' }} variant="body1" gutterBottom component="div">Do Full-stack web development with JavaScript, MERN (Mongo DB, Express Js, React Js, Node js).
                                    </Typography>
                                    <Button variant="contained" sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, py: 2, cursor: 'pointer' }} data-aos="slide-up"
                            className='card'>
                            <CardContent>
                                <div className='serviceLogoTitle'>
                                    <YouTubeIcon className='serviceIcon' />
                                    <Typography sx={{ color: '#0779E4', fontWeight: 600, my: 3 }} variant="h6" gutterBottom component="div">Responsive
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography sx={{ fontWeight: '550', color: '#362682' }} variant="body1" gutterBottom component="div">Develope web application which will familiar with all devices. Fully responsive with mobile, tab, laptop etc.
                                    </Typography>
                                    <Button variant="contained" sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, py: 2, cursor: 'pointer' }} data-aos="slide-up"
                            className='card'>
                            <CardContent>
                                <div className='serviceLogoTitle'>
                                    <InstagramIcon className='serviceIcon' />
                                    <Typography sx={{ color: '#0779E4', fontWeight: 600, my: 3 }} variant="h6" gutterBottom component="div">UI & UX Design
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography sx={{ fontWeight: '550', color: '#362682' }} variant="body1" gutterBottom component="div">Also develop User interface and User experience(UI/UX), based on your business or clients.
                                    </Typography>
                                    <Button variant="contained" sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, py: 2, cursor: 'pointer' }}
                            data-aos='flip-up'
                            className='card'>
                            <CardContent>
                                <div className='serviceLogoTitle'>
                                    <PinterestIcon className='serviceIcon' />
                                    <Typography sx={{ color: '#0779E4', fontWeight: 600, my: 3 }} variant="h6" gutterBottom component="div">Web Development
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography sx={{ fontWeight: '550', color: '#362682' }} variant="body1" gutterBottom component="div">Do Full-stack web development with JavaScript, MERN (Mongo DB, Express Js, React Js, Node js).
                                    </Typography>
                                    <Button variant="contained" sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, py: 2, cursor: 'pointer' }} data-aos="slide-up"
                            className='card'>
                            <CardContent>
                                <div className='serviceLogoTitle'>
                                    <TwitterIcon className='serviceIcon' />
                                    <Typography sx={{ color: '#0779E4', fontWeight: 600, my: 3 }} variant="h6" gutterBottom component="div">Responsive
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography sx={{ fontWeight: '550', color: '#362682' }} variant="body1" gutterBottom component="div">Develope web application which will familiar with all devices. Fully responsive with mobile, tab, laptop etc.
                                    </Typography>
                                    <Button variant="contained" sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, py: 2, cursor: 'pointer' }} data-aos="slide-up"
                            className='card'>
                            <CardContent>
                                <div className='serviceLogoTitle'>
                                    <LinkedInIcon className='serviceIcon' />
                                    <Typography sx={{ color: '#0779E4', fontWeight: 600, my: 3 }} variant="h6" gutterBottom component="div">UI & UX Design
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography sx={{ fontWeight: '550', color: '#362682' }} variant="body1" gutterBottom component="div">Also develop User interface and User experience(UI/UX), based on your business or clients.
                                    </Typography>
                                    <Button variant="contained" sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Box data-aos="zoom-in" sx={{ m: 8 }}>
                    <Typography
                        sx={{ fontWeight: '800', color: '#00000090', mb: 2 }}
                        variant="body1"
                        gutterBottom
                        component="div">
                        Have any works you want to done by me?<Link to="/aboutUs"><span style={{ color: '#0779E4' }}> About Us</span></Link>
                    </Typography>
                    <Typography
                        sx={{ fontWeight: '550', color: '#00000090' }}
                        variant="body1"
                        gutterBottom
                        component="div">
                        If you have any question or suggestion for me and need more information about me and my work, then <br />--please contact me.
                    </Typography>
                </Box>
            </Container>
            <div style={{
                padding: '5rem 0',
                backgroundImage: 'url(https://i.ibb.co/w6BVs0s/bg.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover'
            }}>
                <Container>
                    <Grid sx={{ color: '#fff' }} container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <div
                                data-aos='zoom-in'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    margin: 'auto',
                                    width: 'fit-content'
                                }}>
                                <div>
                                    <ReviewsIcon sx={{ fontSize: '5rem' }} />
                                </div>
                                <div style={{ marginLeft: '8px' }}>
                                    <Typography
                                        sx={{ m: 0 }}
                                        variant="h3"
                                        gutterBottom
                                        component="div">
                                        {/* countUp number */}
                                        <CountUp end={100} duration={1} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </Typography>
                                    <Typography
                                        sx={{ fontWeight: 'bold' }}
                                        variant="subtitle2" display="block"
                                        gutterBottom>
                                        HAPPY CUSTOMER
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div
                                data-aos='zoom-out'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    margin: 'auto',
                                    width: 'fit-content'
                                }}>
                                <div>
                                    <AssignmentTurnedInIcon sx={{ fontSize: '5rem' }} />
                                </div>
                                <div style={{ marginLeft: '8px' }}>
                                    <Typography
                                        sx={{ m: 0 }}
                                        variant="h3"
                                        gutterBottom
                                        component="div">
                                        {/* countUp number */}
                                        <CountUp end={12} duration={1} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </Typography>
                                    <Typography
                                        sx={{ fontWeight: 'bold' }}
                                        variant="subtitle2" display="block"
                                        gutterBottom>
                                        PROJECT COMPLETED
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div
                                data-aos='zoom-in'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    margin: 'auto',
                                    width: 'fit-content'
                                }}>
                                <div>
                                    <CoffeeIcon sx={{ fontSize: '5rem' }} />
                                </div>
                                <div style={{ marginLeft: '8px' }}>
                                    <Typography
                                        sx={{ m: 0 }}
                                        variant="h3"
                                        gutterBottom
                                        component="div">
                                        {/* countUp number */}
                                        <CountUp end={100} duration={1} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </Typography>
                                    <Typography
                                        sx={{ fontWeight: 'bold' }}
                                        variant="subtitle2" display="block"
                                        gutterBottom>
                                        CUPS OF COFFEE
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div >
    );
};

export default OurServices;