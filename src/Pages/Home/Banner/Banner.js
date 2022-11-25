import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-image mt-1">
            <div className="max-w-[1140px] mx-auto h-full flex justify-center items-center">
                <div className="text-white text-center">
                    <h1 className="text-6xl text-white uppercase font-semibold">
                        We sell qualityful reuseable laptop
                    </h1>
                    <p className="w-3/5 mx-auto mb-4">
                        All most every brnad laptop we sell. We provide this service from long time age. Our customer are satiesfied with their good one. We want graduallay update our quality better.
                    </p>
                    <button className="btn bg-red-700 hover:bg-red-600 border-0">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;