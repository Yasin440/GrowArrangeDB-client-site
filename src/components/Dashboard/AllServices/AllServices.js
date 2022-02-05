import React from 'react';
import ServicesTable from '../../ServicesTable/ServicesTable';
import useAuth from '../../../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';

const AllServices = () => {
    const { categories } = useAuth();
    return (
        <div>
            <div className='title-section'>
                <h1>our crush <span>service</span></h1>
                <span className='title-bg'>services</span>
            </div>
            {
                !categories ?
                    <div style={{ width: 'fit-content', margin: '4rem auto' }}>
                        <CircularProgress />
                    </div> :
                    <div style={{ width: '100%', margin: 'auto' }}>

                        {
                            categories?.map(category => <ServicesTable key={category._id} category={category.category} />)
                        }

                    </div>
            }
        </div>
    );
};

export default AllServices;