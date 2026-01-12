import React, { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import useUserInfo from '../hooks/UseUserInfo';
import Loader from '../components/Loader';

const PublicRoute = ({ children }) => {

    const { loading, user } = use(AuthContext);

    const { isLoading, role } = useUserInfo();

    // const location = useLocation();

    if (loading || isLoading) {
        return <Loader></Loader>
    }

    if (user) {
        if (role === 'hr') {
            return <Navigate to='/dashboard/asset-list'></Navigate>
        }
        else {
            return <Navigate to='/dashboard/request-asset'></Navigate>
        }
    }

    return children
};

export default PublicRoute;