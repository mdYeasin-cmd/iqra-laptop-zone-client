import React from 'react';

const Product = ({ product }) => {

    const { productName, photoURL, resalePrice } = product;
    console.log(Product);
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-5 mt-5">
            <figure>
                <img src={photoURL} className="w-full" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>
                    <span className="font-semibold">Product Name:</span> {productName}
                </p>
                <p>
                    <span className="font-semibold">Resale Price:</span> {resalePrice}
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;