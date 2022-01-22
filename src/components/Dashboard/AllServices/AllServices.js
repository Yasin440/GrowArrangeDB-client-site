import React from 'react';
import ServicesTable from '../../ServicesTable/ServicesTable';

const AllServices = () => {
    return (
        <div className='allServices' style={{ padding: '3rem 0' }}>
            <ServicesTable />
            <ServicesTable />
            <ServicesTable />
            <ServicesTable />
            <ServicesTable />
            <ServicesTable />
        </div>
    );
};

export default AllServices;