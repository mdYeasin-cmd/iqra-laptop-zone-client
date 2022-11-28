import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

console.log(stripePromise);

const Payment = () => {

    const booking = useLoaderData();
    const {productName, productPrice} = booking;

    console.log(booking);

    return (
        <div>
            <h2 className="text-3xl">Payment for {productName}</h2>
            <p className="text-xl">Please pay <strong>${productPrice}</strong> for orders.</p>
            <div className="w-96 my-6">
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;