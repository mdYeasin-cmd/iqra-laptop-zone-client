import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/logIn"></Navigate>
};

export default PrivateRoute;