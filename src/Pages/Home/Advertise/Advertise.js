import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdvertisedCard from './AdvertisedCard';

const Advertise = () => {

    const [advertised, setAdvertised] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:5000/advertise')
        .then(data => setAdvertised(data.data))
    } ,[])
    // console.log(advertised)

    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Advertised Products are Here</h1>
            <div className='lg:grid grid-cols-3 lg:ml-10'>
               {
                advertised.map(advertise => <AdvertisedCard
                        key={advertise._id}
                        advertise={advertise}
                    >
                    </AdvertisedCard>)
                }

            </div>
        </div>
    );
};

export default Advertise;