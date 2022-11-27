import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminReport = () => {
    const [reported, setReported] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/reportAdmin')
            .then(data => setReported(data.data))
    }, [])
    console.log(reported)
    return (
        <div>
             <h3 className="text-3xl mb-5 font-bold">Reported Product</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Buyer Name</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          reported?.length &&
                          reported?.map((order, i) => <tr key={order._id}>
        
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                      <div className="w-24 rounded-full">
                                        <img src={order.image} alt="" />
                                       </div>
                                    </div></td>
                                <td>{order.buyer}</td>
                                <td>{order.productName}</td>
                                <td>{order.resalePrice}</td>
                                <td>{order.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AdminReport;