import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const Product = ({ product, setBookNow }) => {

    const [isVerified, setIsVerified] = useState(false);

    const {
        postTime,
        productName,
        photoURL,
        resalePrice,
        orginalPrice,
        productCondition,
        phoneNumber,
        location,
        description,
        yearOfUse,
        sellerName,
        sellerEmail
    } = product;

    

    useEffect(() => {
        if(sellerEmail) {
            fetch(`https://iqra-laptop-zone-server.vercel.app/seller?email=${sellerEmail}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsVerified(data.isVerified)
                    // console.log(data.isVerified);
                })
        }
        
    }, [sellerEmail]);

    const handleReportToAdmin = (product) => {
        console.log(product);
        fetch(`https://iqra-laptop-zone-server.vercel.app/reportedProducts/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({isReported: true})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (
        <div className="card card-compact bg-base-100 shadow-xl p-5 mt-5">
            <figure>
                <img src={photoURL} className="w-full" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>
                    <span className="font-semibold">Posting Time:</span> {postTime}
                </p>
                <p>
                    <span className="font-semibold">Product Name:</span> {productName}
                </p>
                <p>
                    <span className="font-semibold">Resale Price:</span> {resalePrice}
                </p>
                <p>
                    <span className="font-semibold">Orginal Price:</span> {orginalPrice}
                </p>
                <p>
                    <span className="font-semibold">Product Condition:</span> {productCondition}
                </p>
                <p>
                    <span className="font-semibold">Phone Number</span> {phoneNumber}
                </p>
                <p>
                    <span className="font-semibold">Location:</span> {location}
                </p>
                <p>
                    <span className="font-semibold">Description:</span> {description}
                </p>
                <p>
                    <span className="font-semibold">Year of use:</span> {yearOfUse}
                </p>
                <p className="flex items-center">
                    <span className="font-semibold">Seller Name:</span>
                    <span>{sellerName}</span>
                    {
                        isVerified && <AiFillCheckCircle className="text-blue-600 ml-1"></AiFillCheckCircle>
                    }

                </p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Book Now</button> */}
                    {
                        isVerified && <>
                            <button
                                onClick={() => handleReportToAdmin(product)}
                                className="btn bg-red-700 border-0 hover:bg-red-600 text-white"
                            >Report to Admin</button>
                            <label
                            // disabled={slots.length === 0}
                            htmlFor="booking-modal"
                            className="btn bg-red-700 border-0 hover:bg-red-600 text-white"
                            onClick={() => setBookNow(product)}
                        >Book Now</label>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;