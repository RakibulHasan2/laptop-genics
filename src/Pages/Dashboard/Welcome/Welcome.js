import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import welcomePic from '../../../Images/pngwing.com (3).png'
import welcome from '../../../Images/pngwing.com (2).png'
import './Welcome.css'
import { useQuery } from '@tanstack/react-query';
const Welcome = () => {
    const {user} = useContext(AuthContext)
    const url = `https://b612-used-products-resale-server-side-rakibul-hasan2-main.vercel.app/users?email=${user?.email}`

    const { data: userRole = {}, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {

            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('usersToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const role = userRole[0]?.role
    // console.log(user)
  
    return (
        <div className='lg:flex justify-center items-center'>
            <img className='welcomePic' src={welcomePic} alt="" />
            <div>
                <h1 className='text-3xl font-bold ml-3'>Welcome <span className='text-blue-800 text-4xl'>{user.displayName} </span>  <br /> To Our <br /> Dashboard Panel <br /> as <span className='text-blue-800 text-4xl'>{role || 'buyer'}</span>. Thank You </h1>
            </div>
            <img className='welcomePic' src={welcome} alt="" />
        </div>
    );
};

export default Welcome;