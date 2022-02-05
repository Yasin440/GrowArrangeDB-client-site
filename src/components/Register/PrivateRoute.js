import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <div style={{ textAlign: 'center' }}>
            <CircularProgress sx={{ my: 3 }} />
        </div>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to='/register' state={{ from: location }} />;
};

export default PrivateRoute;