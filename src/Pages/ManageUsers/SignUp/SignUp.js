import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {

    const { createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const userRole = form.userRole.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateProfile({
                    displayName: name,
                    photoURL: photoURL
                });
                saveUser(name, email, userRole);
                console.log(user);
                navigate('/');
                toast.success('Successfully Sign Up');
            })
            .catch(error => {
                toast.error(error.message);
            });

    }

    const updateProfile = (profileInfo) => {
        profileUpdate(profileInfo)
            .then(() => {

            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const saveUser = (name, email, userRole) => {
        const user = {
            name,
            email,
            userRole
        }
        fetch(`https://iqra-laptop-zone-server.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }

    return (
        <div className="w-2/5 mx-auto shadow-2xl p-8 my-10 rounded-lg">
            <h2 className="text-3xl w-4/12 mx-auto py-2 rounded-lg font-semibold text-center bg-red-200">Sign Up</h2>
            <form onSubmit={handleSignUp}>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Phot URL</span>
                    </label>
                    <input
                        type="text"
                        name="photoURL"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control text-center mt-4">

                    <p>Choose your account type?</p>

                    <div className="flex items-center justify-center">

                        <input className="ml-2" type="radio" id="buyer" name="userRole" value="buyer" defaultChecked />
                        <label className="mr-3 ml-1" htmlFor="buyer">Buyer</label>
                        <br />
                        <input className="mr-1" type="radio" id="seller" name="userRole" value="seller" />
                        <label htmlFor="seller">Seller</label>

                    </div>

                </div>

                <div className="form-control w-full">
                    <input
                        type="submit"
                        value="Sign Up"
                        className="btn bg-red-700 hover:bg-red-600 border-0 mt-4 w-full"
                    />
                </div>
            </form>
            <div>
                <p className="text-center mt-3 text-lg">
                    <small>Already have an account? <Link className="text-blue-900" to="/login">Log In</Link></small>
                </p>
            </div>
        </div>
    );
};

export default SignUp;