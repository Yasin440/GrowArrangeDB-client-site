import React from 'react';
import ServicesTable from '../ServicesTable/ServicesTable';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';

const Services = () => {
    return (
        <div>
            <Header />
            <div style={{ padding: '3rem 0', width: '96%', margin: 'auto' }}>
                <ServicesTable />
                <ServicesTable />
                <ServicesTable />
            </div>
            <Footer />
        </div>
    );
};

export default Services;