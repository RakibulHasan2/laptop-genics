import { useQuery } from '@tanstack/react-query';
import React from 'react'
import CategoriesCard from './CategoriesCard';


const Category = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })
    // console.log(categories)
    return (
        <div >
            <h1 className='text-3xl font-bold text-center mt-5'>Here {categories.length} Categories are Available</h1>
            <div className='lg:grid grid-cols-3 lg:pl-10'>
                {
                    categories.map(items => <CategoriesCard
                        key={items._id}
                        items={items}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Category;