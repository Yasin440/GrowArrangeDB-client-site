import React from 'react';
import './Home.css';
import Register from '../Register/Register';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import OurServices from '../../shared/OurServices/OurServices';
import useAuth from '../../Hooks/useAuth';
import RegistrationNow from '../../shared/RegistrationNow/RegistrationNow';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    const { user, allOrders } = useAuth();
    return (
        <div className="home">
            <Header />
            <Container>
                <Grid sx={{ alignItems: 'center', color: '#4747F3', margin: '2rem 0 1rem 0' }} container spacing={2}>
                    <Grid item md={8} xs={12}>
                        <h3>Growth Arrange<span style={{ color: 'red' }}> - #1</span></h3>
                        <h1 style={{ fontSize: '50px', marginTop: '0' }}><span style={{ color: 'red' }}>Cheap</span> Service Panel For<br />Digital Marketer.</h1>
                        <p>{10220 + parseFloat(`${allOrders?.length}`)} Orders until now!</p>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <img width="60%" src="https://cdn.mypanel.link/770smr/z5t84khwk1u3gg48.gif" alt="IMG" />
                    </Grid>
                </Grid>
            </Container>
            {user.email ? <RegistrationNow /> : <Register />}
            <OurServices />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;