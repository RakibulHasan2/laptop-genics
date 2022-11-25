import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/dashboard/products?email=${user?.email}`

    const { data: products = [] } = useQuery({
        queryKey: ['dashboard/items', user?.email],
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
    return (
        <div>
            <div className='flex justify-center mb-5 mt-5'>
                <h1 className='text-3xl'>My Added Items </h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Model Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.length && products?.map((product, index) =>
                                <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <th><img className="mask mask-circle h-24" src={product.image} alt="" /></th>
                                    <th>{product.name}</th>
                                    <th>{product.resalePrice}৳</th>
                                    <th><button className='btn btn-danger'>remove</button></th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;