import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className="bg-red-700 py-14">
            <h2 className="text-4xl text-center text-white uppercase font-semibold">Subscribe</h2>
            <p className="text-center text-white font-light mt-2">Do subscribe our weekly newsletter. We provide insights of laptop and details about laptop.</p>
            <div className="flex items-center justify-center mt-6">
                <input className="input-field w-1/3 p-3 rounded-l-lg" type="email" placeholder='Your Email' />
                <button className='subscribe-btn text bg-slate-800 rounded-r-lg text-white p-3 uppercase font-semibold'>Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;