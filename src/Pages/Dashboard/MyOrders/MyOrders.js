import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookedLaptop?email=${user?.email}`;
    const { data: orders = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                   authorization: `bearer ${localStorage.getItem('accessToken')}` 
                }
            });
            const data = await res.json();
            return data;
        }
    })
//  console.log(orders)
    return (
        <div>
            <h3 className="text-3xl mb-5 font-bold">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.length &&
                            orders?.map((order, i) => <tr key={order._id}>
        
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                      <div className="w-24 rounded-full">
                                        <img src={order.image} alt="" />
                                       </div>
                                    </div></td>
                                <td>{order.productName}</td>
                                <td>{order.resalePrice}</td>
                                <td>
                                    {
                                        order.resalePrice && <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className=' btn btn-primary btn-sm'>
                                                Pay
                                            </button>
                                        </Link>

                                    }
                                    {/* {
                                        order.resalePrice && <button className=' btn btn-success btn-sm'>
                                            Paid
                                        </button>
                                    } */}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;