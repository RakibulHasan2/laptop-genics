import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import welcomePic from '../../../Images/pngwing.com (3).png'
import welcome from '../../../Images/pngwing.com (2).png'
import './Welcome.css'
const Welcome = () => {
    const {user} = useContext(AuthContext)
    // console.log(user)
  
    return (
        <div className='lg:flex justify-center items-center'>
            <img className='welcomePic' src={welcomePic} alt="" />
            <div>
                <h1 className='text-3xl font-bold ml-3'>Welcome <span className='text-blue-800 text-4xl'>{user.displayName} </span>  <br /> To Our <br /> Dashboard Panel. Thank You </h1>
            </div>
            <img className='welcomePic' src={welcome} alt="" />
        </div>
    );
};

export default Welcome;