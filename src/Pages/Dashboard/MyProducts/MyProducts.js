import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const MyProducts = () => {
    const [product, deleteProduct] = useState([])
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
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
    // console.log(products)
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
    const handleAdvertise = id => {

        const advertiseProduct = products.filter(prod => prod._id === id)
        const advertise = advertiseProduct[0]
        // console.log(advertise)
        const proceed = window.confirm('Want To Advertise this product?')
        if (proceed) {
            const advertiseProduct = {
                category_id: advertise.category_id,
                product_id: advertise._id,
                name: advertise.name,
                email: advertise.email,
                details: advertise.details,
                image: advertise.image,
                location: advertise.location,
                originalPrice: advertise.originalPrice,
                resalePrice: advertise.resalePrice,
                sellerName: advertise.sellerName,
                used: advertise.yearOfUse,
                postTime: advertise.postTime
            }
            fetch('http://localhost:5000/advertise', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('usersToken')}`

                },
                body: JSON.stringify(advertiseProduct)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.acknowledged) {
                        toast.success('Advertise successfully')
                        navigate('/')
                    }
                    else {
                        toast.error(result.message)
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
                            <th>Advertise</th>
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
                                    <th><button onClick={() => handleAdvertise(product._id)} className='btn btn-success'>Advertise</button></th>
                                    <th><button onClick={() => handleDelete(product._id)} className='btn btn-primary'>remove</button></th>
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