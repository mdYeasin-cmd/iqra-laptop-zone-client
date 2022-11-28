import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';

const ReportedItems = () => {

    // const [reportedProducts, setReportedProducts] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:5000/reportedProducts')
    //         .then(res => setReportedProducts(res.data))
    // }, []);

    const { data: reportedProducts, isLoading, refetch } = useQuery({
        queryKey: ['reportedPorducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/reportedProducts`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    /* 
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${email}`);
            const data = await res.json();
            return data;
        }
    });
    
    */

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/products/${id}`)
            .then((res) => {
                refetch();
                console.log(res.data);
            })
    }


    return (
        <div>
            <h2 className="text-4xl text-center mt-3 font-semibold">Reported Items</h2>
            <div className="overflow-x-auto">
                <table className="table mt-4 mx-auto shadow-lg">

                    <thead>
                        <tr className="text-center">
                            <th></th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            reportedProducts.map((product, idx) => <tr key={product._id}>
                                <th>{idx + 1}</th>
                                <td>{product?.productName}</td>
                                <td>{product?.sellerName}</td>
                                <td>{product?.sellerEmail}</td>
                                <td>
                                    <button
                                        className="btn bg-red-700 hover:bg-red-600 border-0 ml-3"
                                        onClick={() => handleDelete(product._id)}
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

export default ReportedItems;