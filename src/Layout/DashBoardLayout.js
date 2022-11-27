import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/users?email=${user?.email}`
     
    const { data: userRole = [], refetch } = useQuery({
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
    // console.log(role)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                {
                    user?.emailVerified ?
                        <div className='drawer-side font-bold'>
                            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80  text-white">
                            <li className='text-2xl font-bold text-green-900 mb-10 ml-3'>Buyer Profile</li>
                            <li className='rounded-lg  hover:bg-sky-700  bg-slate-400 mb-2'><Link to="/dashboard/myOrders">My Orders</Link></li>
                            </ul>
                        </div>
                        :
                        <div className="drawer-side font-bold">
                            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80  text-white">
                                {
                                    role === "admin" ?
                                        <>
                                            <p className='text-2xl font-bold text-green-900 mb-10 ml-3'>Admin Panel</p>
                                            <li className='rounded-lg  hover:bg-sky-700  bg-slate-400 mb-2'><Link to="/dashboard/allSellers">All Seller</Link></li>
                                            <li className='rounded-lg  hover:bg-sky-700  bg-slate-400 mb-2'><Link to="/dashboard/allBuyers">All Buyers</Link></li>
                                        </>
                                        :
                                        <></>
                                }
                                {
                                    role === 'seller' ?
                                        <>
                                            <p className='text-2xl font-bold text-green-900 mb-10 ml-3'>Seller Panel</p>
                                            <li className='rounded-lg  hover:bg-sky-700  bg-slate-400 mb-2'><Link to="/dashboard/addProduct">Add A Product</Link></li>
                                            <li className='rounded-lg  hover:bg-sky-700  bg-slate-400 mb-2'><Link to="/dashboard/myProducts">My Product</Link></li>
                                        </>
                                        : <></>
                                }

                                {
                                    role === "buyer" ?
                                        <>
                                            <p className='text-2xl font-bold text-green-900 mb-10 ml-3'>Buyer Profile</p>
                                            <li className='rounded-lg  hover:bg-sky-700  bg-slate-400 mb-2'><Link to="/dashboard/myOrders">My Orders</Link></li>
                                        </>
                                        :
                                        <></>
                                }
                            </ul>
                        </div>
                }
            </div>

        </div>
    );
};

export default DashBoardLayout;