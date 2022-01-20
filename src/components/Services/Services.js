import React from 'react';
import ServicesTable from '../ServicesTable/ServicesTable';

const Services = () => {
    return (
        <div style={{ padding: '3rem 0' }}>
            <ServicesTable />
            <ServicesTable />
            <ServicesTable />
        </div>
    );
};

export default Services;