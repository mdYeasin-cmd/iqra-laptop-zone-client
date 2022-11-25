import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './LonIn.css';

const LogIn = () => {
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const handleSignInWithGoogle = () => {

    }

    return (
        <div className="w-2/5 mx-auto shadow-2xl p-8 my-10 rounded-lg">
            <h2 className="text-3xl w-4/12 mx-auto py-2 rounded-lg font-semibold text-center bg-red-200">Log In</h2>
            <form onSubmit={handleLogIn}>

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

                <div className="form-control w-full">
                    <input
                        type="submit"
                        value="Log In"
                        className="btn bg-red-700 hover:bg-red-600 border-0 mt-4 w-4/12 mx-auto"
                    />
                </div>
            </form>

            <div className="divider my-5">OR</div>

            <div className="text-center my-3">
                <button onClick={handleSignInWithGoogle} className="bg-slate-100 p-2 social-login-btn">
                    <FcGoogle></FcGoogle>
                </button>
            </div>
            <div>
                <p className="text-center mt-3 text-lg">
                    <small>Don't have an account? <Link className="text-blue-900" to="/signUp">Sign Up</Link></small>
                </p>
            </div>
        </div>

    );
};

export default LogIn;