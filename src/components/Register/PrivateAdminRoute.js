import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateAdminRoute = ({ children, ...rest }) => {
    const { user, loading, admin } = useAuth();
    const location = useLocation();
    if (loading || !admin) {
        return <div style={{ textAlign: 'center' }}>
            <CircularProgress sx={{ my: 3 }} />
        </div>
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} />;
};

export default PrivateAdminRoute;