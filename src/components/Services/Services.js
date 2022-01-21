import React from 'react';
import ServicesTable from '../ServicesTable/ServicesTable';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';

const Services = () => {
    return (
        <>
            <Header />
            <div style={{ padding: '3rem 0' }}>
                <ServicesTable />
                <ServicesTable />
                <ServicesTable />
            </div>
            <Footer />
        </>
    );
};

export default Services;