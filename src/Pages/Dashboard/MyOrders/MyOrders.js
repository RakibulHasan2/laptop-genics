import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

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
// console.log("order", orders)
    const handleAdminReport = id =>{
        const proceed = window.confirm('Want To Report this product?')
        const reportProduct = orders.filter(prod => prod._id === id)
        const report = reportProduct[0]
        // console.log('report ', report)
        if(proceed){
            const reportProduct = {
                buyer: report.buyer,
                email: report.email,
                image: report.image,
                resalePrice: report.resalePrice,
                productName: report.productName
            }
            fetch('http://localhost:5000/reportAdmin', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('usersToken')}`

                },
                body: JSON.stringify(reportProduct)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.acknowledged) {
                        toast.success('Advertise successfully')
                    }
                    else {
                        toast.error(result.message)
                    }
                })
        }
    }
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
                            <th>Admin Report</th>
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
                                <td><button onClick={() => handleAdminReport(order._id)} className='btn btn-success'>Report To Admin</button></td>
                                <td>
                                    {
                                        order.resalePrice && !order?.paid && <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className=' btn btn-primary'>
                                                Pay
                                            </button>
                                        </Link>

                                    }
                                    {
                                        order.resalePrice && order?.paid && <button className=' btn bg-green-700'>
                                            Paid
                                        </button>
                                    }
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