import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/buyers`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Successfully Deleted');
                console.log(data)
                localStorage.removeItem('advertisedProduct');
            })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <h2 className="text-4xl text-center mt-3 font-semibold">All Sellers</h2>
            <p>{buyers.length}</p>
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
                            buyers.map((buyer, idx) => <tr key={buyer._id}>
                                <th>{idx + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
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
                                    onClick={() => handleDelete(buyer._id)}
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

export default AllBuyers;