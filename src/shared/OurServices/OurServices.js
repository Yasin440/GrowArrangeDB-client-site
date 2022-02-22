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
import useAuth from '../../Hooks/useAuth';

const OurServices = () => {
    const { clients, allOrders } = useAuth()
    return (
        <div className='ourServices' style={{ padding: '5rem 0' }}>
            <div style={{ marginBottom: '8rem' }}><h1 className="title titleBar">Our Crush Services..</h1></div>
            <Container>
                <Grid container spacing={3} sx={{ width: '100%', marginBottom: '3rem' }}>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, cursor: 'pointer' }}
                            data-aos='flip-up'
                            className='card fbMarketing'>
                            <CardContent className="content">
                                <div className='serviceLogoTitle'>
                                    <FacebookIcon className='serviceIcon' />
                                    <Typography className="ServiceTitle" variant="h6" gutterBottom component="div">Facebook Marketing
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography className="ServiceSubTitle" variant="body1" gutterBottom component="div">We are providing FB page, post, profile followers, views, like. Also can buy complete page to grow up your business.
                                    </Typography>
                                    <Link to="/services"><Button variant="contained" sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button></Link>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, cursor: 'pointer' }} data-aos="slide-up"
                            className='card ytMarketing'>
                            <CardContent className="content">
                                <div className='serviceLogoTitle'>
                                    <YouTubeIcon className='serviceIcon' />
                                    <Typography className="ServiceTitle" variant="h6" gutterBottom component="div">Youtube Subscriber & Views
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography className="ServiceSubTitle" variant="body1" gutterBottom component="div">Your videos content is so good but not growing your channel? Don't worry GROWTH Arrange can help you to grow your channel.
                                    </Typography>
                                    <Link to="/services"><Button variant="contained" sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button></Link>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, cursor: 'pointer' }} data-aos="slide-up"
                            className='card instagramMarketing'>
                            <CardContent className="content">
                                <div className='serviceLogoTitle'>
                                    <InstagramIcon className='serviceIcon' />
                                    <Typography className="ServiceTitle" variant="h6" gutterBottom component="div">Instagram Followers
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography className="ServiceSubTitle" variant="body1" gutterBottom component="div">Growth Arrange can grow the the number of your followers in a smarter way.
                                    </Typography>
                                    <Link to="/services"><Button variant="contained" sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button></Link>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, cursor: 'pointer' }}
                            data-aos='flip-up'
                            className='card pinterestMarketing'>
                            <CardContent className="content">
                                <div className='serviceLogoTitle'>
                                    <PinterestIcon className='serviceIcon' />
                                    <Typography className="ServiceTitle" variant="h6" gutterBottom component="div">Pinterest
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography className="ServiceSubTitle" variant="body1" gutterBottom component="div">Need to grow up your Pinterest account. Connect with us.
                                    </Typography>
                                    <Link to="/services"><Button variant="contained" sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button></Link>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, cursor: 'pointer' }} data-aos="slide-up"
                            className='card twitterMarketing'>
                            <CardContent className="content">
                                <div className='serviceLogoTitle'>
                                    <TwitterIcon className='serviceIcon' />
                                    <Typography className="ServiceTitle" variant="h6" gutterBottom component="div">Grow with Twitter
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography className="ServiceSubTitle" variant="body1" gutterBottom component="div">If your Twitter account is growing in a slow speed. Connect with us to get a high speed.
                                    </Typography>
                                    <Link to="/services"><Button variant="contained" sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button></Link>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, cursor: 'pointer' }} data-aos="slide-up"
                            className='card linkedInMarketing'>
                            <CardContent className="content">
                                <div className='serviceLogoTitle'>
                                    <LinkedInIcon className='serviceIcon' />
                                    <Typography className="ServiceTitle" variant="h6" gutterBottom component="div">LinkedIn Connection
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography className="ServiceSubTitle" variant="body1" gutterBottom component="div">Get professional LinkedIn Account for your career.
                                    </Typography>
                                    <Link to="/services"><Button variant="contained" sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button></Link>
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
                        Have any works you want to done by me?<Link to="/contactUs"><span style={{ color: '#0779E4' }}> Contact Us</span></Link>
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
                                        <CountUp
                                            end={450 + parseFloat(`${clients?.length}`)} duration={1}
                                            redraw={true}>
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
                                        <CountUp
                                            end={10020 + parseFloat(`${allOrders?.length}`)} duration={1}
                                            redraw={true}>
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
                                        COMPLETED ORDERS
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
                                        <CountUp
                                            end={100 + parseFloat(`${clients?.length}`)} duration={1}
                                            redraw={true}>
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