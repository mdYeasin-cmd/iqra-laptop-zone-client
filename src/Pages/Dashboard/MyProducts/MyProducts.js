import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import Advertise from '../../Home/Advertise/Advertise';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [isAdvertise, setIsAdvertise] = useState(false);
    const [product, setProduct] = useState({});

    const handleAdvertise = (product) => {

        fetch(`https://iqra-laptop-zone-server.vercel.app/products/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ isAdvertise: true })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (product.isAdvertise === true) {
                    setIsAdvertise(true);
                    setProduct(product);
                    localStorage.setItem('advertisedProduct', JSON.stringify(product));
                    toast.success('Product advertise added to the home page.')
                }
            })
            .catch(error => toast.error(error));

    }

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products', email],
        queryFn: async () => {
            const res = await fetch(`https://iqra-laptop-zone-server.vercel.app/products?email=${email}`);
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = (id) => {
        fetch(`https://iqra-laptop-zone-server.vercel.app/products/${id}`, {
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

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    console.log(products);

    return (
        <div>
            <h2 className="text-4xl text-center mt-3 font-semibold">My Products</h2>
            <div className="overflow-x-auto">
                <table className="table mt-4 mx-auto shadow-lg">

                    <thead>
                        <tr className="text-center">
                            <th></th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            products.map((product, idx) => <tr key={product._id}>
                                <th>{idx + 1}</th>
                                <td>{product.productName}</td>
                                <td>{`${product.resalePrice} Tk`}</td>
                                <td className="bg-green-600 text-white font-semibold text-center">Avaiable</td>
                                <td>
                                    <button
                                        className="btn bg-red-700 hover:bg-red-600 border-0"
                                        onClick={() => handleAdvertise(product)}
                                    >
                                        {
                                            !product.isAdvertise ? 'Advertised' : 'Advertise'
                                        }
                                    </button>
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

export default MyProducts;