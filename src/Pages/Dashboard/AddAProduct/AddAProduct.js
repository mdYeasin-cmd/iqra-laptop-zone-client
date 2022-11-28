import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddAProduct = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleProductPost = (event) => {
        event.preventDefault();
        const time = new Date();
        const postTime = time.toLocaleString();
        const form = event.target;
        const category_id = form.productCategory.value;
        const productName = form.productName.value;
        const photoURL = form.photoURL.value;
        const resalePrice = form.resalePrice.value;
        const orginalPrice = form.orginalPrice.value;
        const productCondition = form.productCondition.value;
        const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;
        const description = form.description.value;
        const yearOfPurchase = form.yearOfPurchase.value;
        const yearOfUse = form.yearOfUse.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = user?.email;

        const product = {
            category_id,
            postTime,
            productName,
            photoURL,
            resalePrice,
            orginalPrice,
            productCondition,
            phoneNumber,
            location,
            description,
            yearOfUse,
            yearOfPurchase,
            sellerName,
            sellerEmail
        }

        fetch(`https://iqra-laptop-zone-server.vercel.app/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Product added successfully.');
                console.log(data);
                navigate('/dashboard/myProducts');
            })
            .catch(error => console.error(error));

    };

    return (
        <div className="w-3/5 mx-auto shadow-2xl p-8 my-10 rounded-lg">
            <h2 className="text-3xl w-1/2 mx-auto py-2 rounded-lg font-semibold text-center bg-red-200">Add A Product</h2>
            <form onSubmit={handleProductPost}>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        name="productName"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Photo URL</span>
                    </label>
                    <input
                        type="text"
                        name="photoURL"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Resale Price</span>
                    </label>
                    <input
                        type="text"
                        name="resalePrice"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Orginal Price</span>
                    </label>
                    <input
                        type="text"
                        name="orginalPrice"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Condition</span>
                    </label>
                    <select name="productCondition" className="select select-bordered w-full">
                        <option disabled defaultValue>--Pick a option--</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        type="text"
                        name="location"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Category</span>
                    </label>
                    <select name="productCategory" className="select select-bordered w-full">
                        <option disabled defaultValue>--Pick a option--</option>
                        <option value="hp_brand_01">HP</option>
                        <option value="dell_brand_02">DELL</option>
                        <option value="assus_brand_03">ASUS</option>
                    </select>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-bordered"></textarea>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Year Of Purchase</span>
                    </label>
                    <input
                        type="text"
                        name="yearOfPurchase"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Year Of Use</span>
                    </label>
                    <input
                        type="text"
                        name="yearOfUse"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input
                        type="text"
                        name="sellerName"
                        defaultValue={user?.displayName}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full">
                    <input
                        type="submit"
                        value="Submit"
                        className="btn bg-red-700 hover:bg-red-600 border-0 mt-4 w-full"
                    />
                </div>

            </form>
        </div>
    );
};

export default AddAProduct;