import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useUserRole from '../../../hooks/useUserRole';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    console.log(orders);

    return (
        <div>

            <h2 className="text-4xl text-center mt-3 font-semibold">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table mt-4 mx-auto shadow-lg">

                    <thead>
                        <tr className="text-center">
                            <th></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            orders.map((order, idx) => <tr key={order._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <img className="w-10 border border-neutral-500" src={order?.productImage} alt="" />
                                </td>
                                <td>{order.productName}</td>
                                <td>{order.productPrice}</td>
                                <td>

                                    <Link to={`/dashboard/payment/${order._id}`}>
                                        <button
                                            className="btn bg-red-700 hover:bg-red-600 border-0 ml-3"
                                        // onClick={() => handleDelete(order._id)}
                                        >PAY</button>
                                    </Link>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;