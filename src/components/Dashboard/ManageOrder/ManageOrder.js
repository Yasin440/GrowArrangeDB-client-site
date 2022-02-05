import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../../Hooks/useAuth';
import ManageOrderTable from './ManageOrderTable';

const ManageOrder = () => {
    const { categories } = useAuth();
    return (
        <div>
            <div className='title-section'>
                <h1>manage<span>order</span></h1>
                <span className='title-bg'>admin</span>
            </div>
            {
                !categories ?
                    <div style={{ width: 'fit-content', margin: '4rem auto' }}>
                        <CircularProgress />
                    </div> :
                    <div style={{ padding: '3rem 0', width: '100%', margin: 'auto' }}>

                        {
                            categories?.map(category => <ManageOrderTable key={category._id} category={category.category} />)
                        }

                    </div>
            }
        </div>
    );
};

export default ManageOrder;