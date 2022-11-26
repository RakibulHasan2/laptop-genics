import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHosKey = process.env.REACT_APP_IMAGEbb;
    const navigate = useNavigate()
    const handleAddItem = data => {
        // console.log(data)
        const image = data.image[0];
        const fromData = new FormData();
        fromData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHosKey} `
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success) {
                    // console.log(imgData.data.url)
                    const postProduct = {
                        name: data.name,
                        category_id: data.category_id,
                        image: imgData.data.url,
                        resalePrice: data.resalePrice,
                        originalPrice: data.originalPrice,
                        location: data.location,
                        condition: data.condition,
                        yearOfUse: data.yearOfUse,
                        sellerName: data.sellerName,
                        postTime: data.postTime,
                        details: data.details,
                        mobileNumber: data.mobileNumber,
                        email: user?.email
                    }
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('usersToken')}`

                        },
                        body: JSON.stringify(postProduct)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success('added Item successfully')
                            navigate('/dashBoard/myProducts')
                        })
                }
            })
    }
    return (
        < div className='pr-5' >
            <div className='flex justify-center text-3xl font-bold'><h1>Add A Product</h1></div>
            <form onSubmit={handleSubmit(handleAddItem)}>

                <div className='grid grid-cols-2 p-5 rounded-2xl font-bold'>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-tex">Seller Name</span></label>
                        <input type="text" {...register("sellerName", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input defaultValue={user?.email} disabled type="email" {...register("email", {
                            // required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Model Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Original Price</span></label>
                        <input type="text" {...register("originalPrice", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Selling Price</span></label>
                        <input type="text" {...register("resalePrice", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition</span></label>
                        <input type="text" {...register("condition", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Details</span></label>
                        <input type="text" {...register("details", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.details && <p className='text-red-500'>{errors.details.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Year of use</span></label>
                        <input type="text" {...register("yearOfUse", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.yearOfUse && <p className='text-red-500'>{errors.yearOfUse.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Phone</span></label>
                        <input type="text" {...register("mobileNumber", {
                            required: 'Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.mobileNumber && <p className='text-red-500'>{errors.mobileNumber.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Write date and time</span></label>
                        <input type="text" {...register("postTime", {
                            required: 'Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.postTime && <p className='text-red-500'>{errors.postTime.message}</p>}
                    </div>


                    <div className=''>
                        <label className="label"> <span className="label-text">Select Category </span></label>
                        <select className="select select-bordered  w-full max-w-xs" {...register("category_id")}>
                            <option value="637f30afe80b236a92fd5950">HP</option>
                            <option value="637f30afe80b236a92fd5951">DELL</option>
                            <option value="637f30afe80b236a92fd5952">ASUS</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo (photo Should be png/jpg format)</span></label>
                        <input type="file" {...register("image", {
                            required: 'Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>
                    <input className='btn btn-primary mt-4' value="Add Product" type="submit" />
                </div>

            </form>
        </div >
    );
};

export default AddProduct;