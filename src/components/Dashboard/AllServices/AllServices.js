import React from 'react';
import ServicesTable from '../../ServicesTable/ServicesTable';
import useAuth from '../../../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';

const AllServices = () => {
    const { categories } = useAuth();
    return (
        <div>
            {
                !categories ?
                    <div style={{ width: 'fit-content', margin: '4rem auto' }}>
                        <CircularProgress />
                    </div> :
                    <div style={{ padding: '3rem 0', width: '100%', margin: 'auto' }}>

                        {
                            categories?.map(category => <ServicesTable key={category._id} category={category.category} />)
                        }

                    </div>
            }
        </div>
    );
};

export default AllServices;