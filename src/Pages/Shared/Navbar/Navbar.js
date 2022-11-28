import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/Logo/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [responsibleUser, setResponsibleUser] = useState({});

    useEffect(() => {
        axios.get(`https://iqra-laptop-zone-server.vercel.app/users?email=${user?.email}`)
            .then(res => setResponsibleUser(res.data));
    }, [user?.email]);

    const activeMenuDesign = {
        background: 'rgb(185 28 28)',
        color: "#fff",
        fontWeight: 'bold',
        borderRadius: '6px'
    }

    const activePage = () => {
        return ({ isActive }) => isActive ? activeMenuDesign : undefined;
    }

    const navbarMenu = <>
        <li><NavLink className="mx-1" style={activePage()} to="/">Home</NavLink></li>
        <li><NavLink className="mx-1" style={activePage()} to="/blog">Blog</NavLink></li>
        <li>
            {
                user && user?.uid && <NavLink className="mx-1" style={activePage()} to="/dashboard">Dashboard</NavLink>
            }
        </li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Your are successfully log out.');
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="navbar pt-3 max-w-[1140px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {navbarMenu}
                    </ul>
                </div>
                <Link to="/" className="flex items-center font-bold text-xl">
                    <img className="w-11 mr-1" src={logo} alt="" />
                    <span className="uppercase text-red-700">Iqra Laptop Zone</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    {navbarMenu}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="navbar-end">
                {
                    user && user.uid ?
                        <>
                            <p className="mr-3 font-medium">
                                {user.displayName}
                                <small className="text-xs">({responsibleUser.userRole})</small>
                            </p>
                            <button onClick={handleLogOut} className="btn bg-red-700 hover:bg-red-600 border-0 btn-sm">Log Out</button>
                        </> :
                        <>
                            <Link to="/signUp">
                                <button className="btn bg-red-700 hover:bg-red-600 border-0 btn-sm mr-2">Sign Up</button>
                            </Link>
                            <Link to="/logIn">
                                <button className="btn bg-red-700 hover:bg-red-600 border-0 btn-sm">Log In</button>
                            </Link>
                        </>

                }
            </div>
        </div>
    );
};

export default Navbar;