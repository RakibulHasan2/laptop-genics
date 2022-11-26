import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import welcomePic from '../../../Images/pngwing.com (1).png'
import welcome from '../../../Images/pngwing.com (2).png'
import './Welcome.css'
const Welcome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='lg:flex justify-evenly'>
            <img className='welcomePic' src={welcomePic} alt="" />
            <div>
                <h1>Welcome {user.displayName} To Our Dashboard Panel</h1>
            </div>
            <img className='welcomePic2' src={welcome} alt="" />
        </div>
    );
};

export default Welcome;