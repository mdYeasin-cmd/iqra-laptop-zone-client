import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {

    const { data: sellers, isLoading } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellers`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2 className="text-4xl text-center mt-3 font-semibold">All Sellers</h2>
            <p>{sellers.length}</p>
            <div className="overflow-x-auto">
                <table className="table mt-4 mx-auto shadow-lg">

                    <thead>
                        <tr className="text-center">
                            <th></th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Verify Action</th>
                            <th>Delete Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            sellers.map((seller, idx) => <tr key={seller._id}>
                                <th>{idx + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    <button
                                        className="btn bg-red-700 hover:bg-red-600 border-0"
                                    // onClick={() => handleAdvertise(product)}
                                    >
                                        Verify
                                    </button>
                                </td>
                                <td>

                                    <button
                                        className="btn bg-red-700 hover:bg-red-600 border-0 ml-3"
                                    // onClick={() => handleDelete(product._id)}
                                    >Delete</button>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;