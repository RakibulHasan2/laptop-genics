import React from 'react';

const SellForCash = () => {
    return (
        <div className=' container lg:flex justify-evenly lg:pl-10'>
            <div>
                <h1 className='text-5xl mt-5 mb-10 font-bold normal-case'>SELL YOUR <br /> <span className=' text-sky-800'> LAPTOP </span><br /> FOR QUICK CASH</h1>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <img className='mb-10' src="https://swap.com.bd/_nuxt/img/laptop.f688c6e.png" alt="" srcSet="" />
        </div>
    );
};

export default SellForCash;