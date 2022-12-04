import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdvertisedCard from './AdvertisedCard';

const Advertise = () => {

    const [advertised, setAdvertised] = useState([])
    useEffect(() => {
        axios.get('https://b612-used-products-resale-server-side-rakibul-hasan2-main.vercel.app/advertise')
            .then(data => setAdvertised(data.data))
    }, [])
    // console.log(advertised)

    if (advertised.length !== 0) {
        return (
            <>
                <h1 className='text-4xl font-bold text-center mb-8'>Advertised {advertised.length} Products are Here</h1>
                <div className='lg:grid grid-cols-3 lg:ml-10'>
                    {
                        advertised.map(advertise => <AdvertisedCard
                            key={advertise._id}
                            advertise={advertise}
                        >
                        </AdvertisedCard>)
                    }
                </div>
            </>
        );
    }
};

export default Advertise;