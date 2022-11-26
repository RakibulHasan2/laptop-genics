import React from 'react';
import { Link } from 'react-router-dom';
import errorPic from '../../../Images/pngwing.com.png'
const ErrorPage = () => {
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img className='h-80' src={errorPic} alt="" />
        <p className='text-9xl font-semibold text-red-700 mb-8'>
          404 
        </p>
        <p className='text-2xl font-semibold md:text-3xl mb-8'>
          Sorry, we couldn't find this page.
        </p>
        <Link
          to='/'
          className='px-8 py-3 font-semibold rounded bg-sky-200 text-gray-900'
        >
          Back to homepage
        </Link>
      </div>
      </section >
    );
};

export default ErrorPage;