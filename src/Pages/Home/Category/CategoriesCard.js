import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ items }) => {
    const {_id, category } = items
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-10">
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{category}</h2>
                <p className='text-justify mb-8'>There are some used products. You can buy or booked for now. You Can Click on See Products. Hurry Up Booked First</p>
                <div className="card-actions justify-end">
                    <Link to={`products/${_id}`}>
                        <button className="btn btn-primary">See Products</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;