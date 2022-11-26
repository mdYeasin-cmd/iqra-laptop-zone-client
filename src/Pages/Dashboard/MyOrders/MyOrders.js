import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useUserRole from '../../../hooks/useUserRole';

const MyOrders = () => {

    return (
        <div>
            <h2 className="text-4xl">My Orders</h2>
        </div>
    );
};

export default MyOrders;