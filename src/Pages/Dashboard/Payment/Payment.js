import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import payPic from '../../../Images/pngwing.com (4).png'
import { useLoaderData } from 'react-router-dom';
import PaymentForm from './PaymentForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const booking = useLoaderData()
    const { resalePrice, productName } = booking
    // console.log(booking)
    return (
        <div className='ml-10 lg:flex'>
            <div className='mt-10'>
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
            <img className='h-96 ml-20' src={payPic} alt="" />
        </div>
    );
};

export default Payment;