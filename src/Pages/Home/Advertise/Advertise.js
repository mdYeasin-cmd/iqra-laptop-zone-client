import React, { useContext } from 'react';
import advertiseBanner from '../../../assets/Advertise/advertise_banner.png'
import { AdContext } from '../../../contexts/AdProvider';

const Advertise = ({ product }) => {

    // const {product} = useContext(AdContext);
    const { productName, description, photoURL } = product;

    return (
        <div className="hero bg-base-200 py-14">
            <div className="max-w-[1140px] mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-1/2 flex justify-center">
                        <img src={photoURL} className="w-3/5" alt="" />
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-4xl font-bold">
                            {productName}
                        </h1>
                        <p className="py-6">
                            {description}
                        </p>
                        <button className="btn bg-red-700 border-0 hover:bg-red-600">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertise;