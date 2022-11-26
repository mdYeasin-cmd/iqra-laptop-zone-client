import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Product from '../Product/Product';

const Products = () => {

    const products = useLoaderData();
    const [bookNow, setBookNow] = useState(null);



    console.log(products);

    return (
        <div className="bg-slate-100 py-10">
            <div className="max-w-[1140px] mx-auto">
                <h2 className='text-4xl text-center font-semibold'>All Products</h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            setBookNow={setBookNow}
                        ></Product>)
                    }
                </div>
                {
                    bookNow && <BookingModal
                        bookNow={bookNow}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default Products;