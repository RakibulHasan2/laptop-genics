import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PaymentForm from './PaymentForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const booking = useLoaderData()
    const {resalePrice,productName} = booking
    // console.log(booking)
    return (
        <div className='ml-10'>
        <h3 className="text-3xl mb-5 font-bold">My Payments</h3>
        <p className="text-3xl">Please pay <strong>{resalePrice} Taka</strong> for the <strong>{productName}</strong> product</p>
            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <PaymentForm
                      booking={booking}>
                    </PaymentForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;