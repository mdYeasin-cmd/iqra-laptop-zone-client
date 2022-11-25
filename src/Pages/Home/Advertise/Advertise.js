import React from 'react';
import advertiseBanner from '../../../assets/Advertise/advertise_banner.png'

const Advertise = () => {
    return (
        <div className="hero bg-base-200 py-14">
            <div className="max-w-[1140px] mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-1/2 flex justify-center">
                        <img src={advertiseBanner} className="w-3/5" alt="" />
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-4xl font-bold">
                            HP 15s-du1116TU Pentium Silver N5030 15.6" HD Laptop
                        </h1>
                        <p className="py-6">
                            The HP 15s-du1116TU comes with Intel Pentium Silver N5030 Processor (4M Cache, 1.10 GHz up to 3.10 GHz) with Intel UHD Graphics 605.
                        </p>
                        <button className="btn bg-red-700 border-0 hover:bg-red-600">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertise;