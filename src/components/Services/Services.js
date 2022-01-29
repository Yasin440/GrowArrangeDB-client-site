import React from 'react';
import ServicesTable from '../ServicesTable/ServicesTable';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import useAuth from '../../Hooks/useAuth';

const Services = () => {
    const { categories } = useAuth();
    return (
        <div>
            <Header />
            <div style={{ padding: '3rem 0', width: '96%', margin: 'auto' }}>
                {
                    categories?.map(category => <ServicesTable key={category._id} category={category.category} />)
                }

            </div>
            <Footer />
        </div>
    );
};

export default Services;