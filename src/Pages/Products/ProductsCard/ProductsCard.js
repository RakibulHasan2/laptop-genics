import React from 'react';

const ProductsCard = ({ product, setProduct }) => {
  const { condition, details, image, location, mobileNumber, name, originalPrice, postTime, sellerName, resalePrice, yearsOfUse } = product
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
      <figure><img className='h-56 w-full' src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <p className="card-title font-bold text-2xl">{name}</p>
        <p className='text-lg'>Details: {details}</p>
        <p className='text-lg'> Condition: {condition}</p>
        <p className='text-lg'> Location: {location}</p>
        <p className='text-lg'> Original Price: {originalPrice} Taka</p>
        <p className='text-lg'>Resale Price : {resalePrice} Taka</p>
        <p className='text-lg' >YearsOfUse : {yearsOfUse} Years</p>
        <p className='text-lg'>Seller Name : {sellerName}</p>
        <p className='text-lg'>Number : {mobileNumber}</p>
        <p className='text-lg'>Post Time : {postTime}</p>
        <div className="card-actions justify-end">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => setProduct(product)}
          >Book Now</label>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;