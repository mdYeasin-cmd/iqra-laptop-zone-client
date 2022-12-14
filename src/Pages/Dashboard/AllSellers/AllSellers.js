import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {

    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`https://iqra-laptop-zone-server.vercel.app/sellers`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    const handleSellerVerification = (seller) => {
        console.log(seller._id);
        fetch(`https://iqra-laptop-zone-server.vercel.app/sellers/${seller._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ isVerified: true })
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                localStorage.setItem('sellerStatus', JSON.stringify(seller));
                console.log(data)
            });
    }

    const handleDelete = (id) => {
        fetch(`https://iqra-laptop-zone-server.vercel.app/sellers/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }

    return (
        <div>
            <h2 className="text-4xl text-center mt-3 font-semibold">All Sellers</h2>
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
                                    {
                                        seller.isVerified && <button
                                            className="btn bg-red-700 hover:bg-red-600 border-0"
                                            onClick={() => handleSellerVerification(seller)}
                                        >
                                            Verified
                                        </button>
                                    }
                                    {
                                        !seller.isVerified && <button
                                            className="btn bg-red-700 hover:bg-red-600 border-0"
                                            onClick={() => handleSellerVerification(seller)}
                                        >
                                            Verify
                                        </button>
                                    }
                                </td>
                                <td>

                                    <button
                                        className="btn bg-red-700 hover:bg-red-600 border-0 ml-3"
                                        onClick={() => handleDelete(seller._id)}
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