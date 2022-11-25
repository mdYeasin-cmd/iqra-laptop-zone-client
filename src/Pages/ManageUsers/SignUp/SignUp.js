import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="w-2/5 mx-auto shadow-2xl p-8 my-10 rounded-lg"> 
            <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
            <form>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Phot URL</span>
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    
                    <div className="flex items-center">
                    <input type="radio" id="html" name="userRole" value="HTML" />
                    <label for="html">Buyer</label><br />
                    <input type="radio" id="css" name="userRole" value="CSS" />
                    <label for="css">Seller</label><br />
                    </div>



                    {/* <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        className="input input-bordered w-full"
                    /> */}
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