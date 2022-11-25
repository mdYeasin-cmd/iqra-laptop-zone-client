import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useUserRole from '../../../hooks/useUserRole';

const MyOrders = () => {

    // const {user} = useContext(AuthContext);
    // const [isUserRole, isUserLoading] = useUserRole(user?.email);
    // console.log(isUserRole);

    // if(isUserLoading) {
    //     return <h2>Loading....</h2>
    // }

    return (
        <div>
            <h2 className="text-4xl">My Orders</h2>
        </div>
    );
};

export default MyOrders;