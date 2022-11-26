import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useUserRole from '../hooks/useUserRole';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext);
    const [isUserRole, isUserLoading] = useUserRole(user?.email);

    if(isUserLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-slate-100">
                        {
                            user && user.uid && isUserRole === 'buyer' && <>
                                <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                            </>
                        }
                        {
                            user && user.uid && isUserRole === 'seller' && <>
                                <li><Link to="/dashboard/addAProduct">Add A Product</Link></li>
                                <li><Link to="/dashboard/myProducts">My Products</Link></li>
                                <li><Link to="/dashboard/myBuyers">My Buyers</Link></li>
                            </>
                        }
                        {
                            user && user.uid && isUserRole === 'admin' && <>
                                <li><Link to="/dashboard/allSellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/allBuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/reportedItems">Reported Items</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;