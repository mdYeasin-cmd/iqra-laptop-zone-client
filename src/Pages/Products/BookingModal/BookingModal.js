import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ bookNow }) => {

    const { user } = useContext(AuthContext);
    const { productName, resalePrice } = bookNow;

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const phoneNumber = form.phoneNumber.value;
        const meetingLocation = form.meetingLocation.value; 

        const ordersInfo = {
            name,
            email,
            productName,
            productPrice,
            phoneNumber,
            meetingLocation
        }

        console.log(ordersInfo)

        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(ordersInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Order successfully submited');
            })
            .catch(error => toast.error(error));


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>

                    <form onSubmit={handleBooking}>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Buyer Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                className="input w-full input-bordered"
                                disabled
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Buyer Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                className="input w-full input-bordered"
                                disabled
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                name="productName"
                                defaultValue={productName}
                                className="input w-full input-bordered"
                                disabled
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input
                                type="text"
                                name="productPrice"
                                defaultValue={`${resalePrice}Tk`}
                                className="input w-full input-bordered"
                                disabled
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                className="input w-full input-bordered"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Meeting Loacation</span>
                            </label>
                            <input
                                type="text"
                                name="meetingLocation"
                                placeholder="Meeting Location"
                                className="input w-full input-bordered"
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
            </div>
        </>
    );
};

export default BookingModal;