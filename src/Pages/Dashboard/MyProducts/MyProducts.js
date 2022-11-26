import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const MyProducts = () => {
    const [product, deleteProduct] = useState([])
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/dashboard/products?email=${user?.email}`

    const { data: products = [], refetch } = useQuery({
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

    const handleDelete = id => {
        const proceed = window.confirm('Want To Delete, Think Again?')
        if (proceed) {
            fetch(` http://localhost:5000/dashboard/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Items Deleted Successfully')
                        const remaining = product.filter(prod => prod._id !== id)
                        deleteProduct(remaining)
                        refetch()
                    }
                })
        }
    }
    return (
        <div>
            <div className='flex justify-center mb-5 mt-5'>
                <h1 className='text-3xl font-bold'>My Products</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead >
                        <tr>
                            <th>SL</th>
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
                                    <th><button onClick={() => handleDelete(product._id)} className='btn btn-danger'>remove</button></th>
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