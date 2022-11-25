import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookProduct from './BookedProduct/BookProduct';
import ProductsCard from './ProductsCard/ProductsCard';

const Products = () => {
    const products = useLoaderData()
    const [product, setProduct] = useState([]);
    // console.log(product)
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-5 mb-10'>Here are Some Products You can</h1>
            <div className='lg:grid grid-cols-3 lg:ml-10'>
                {
                    products.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                        setProduct = {setProduct}
                    >
                    </ProductsCard>)
                }
            </div>
            {
                <BookProduct
                product = {product}
                setProduct = {setProduct}
                >
                </BookProduct>
            }
        </div>
    );
};

export default Products;