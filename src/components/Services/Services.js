import React from 'react';
import ServicesTable from '../ServicesTable/ServicesTable';
import useAuth from '../../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';

const Services = () => {
    const { categories } = useAuth();
    console.log(categories);
    return (
        <div>
            <Header />
            <div className='title-section'>
                <h1>our crush <span>service</span></h1>
                <span className='title-bg'>services</span>
            </div>
            {
                categories ?
                    <div style={{ padding: '3rem 0', width: '96%', margin: 'auto' }}>

                        {
                            categories?.map(category => <ServicesTable key={category._id} category={category.category} />)
                        }

                    </div>
                    :
                    <div style={{ width: 'fit-content', margin: '4rem auto' }}>
                        <CircularProgress />
                    </div>

            }
            <Footer />
        </div>
    );
};

export default Services;