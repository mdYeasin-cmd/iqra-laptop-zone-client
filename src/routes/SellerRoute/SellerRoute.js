// import React, { useContext } from 'react';
// import { AuthContext } from '../../contexts/AuthProvider';

// const SellerRoute = () => {
//     const { user, loading } = useContext(AuthContext);
//     const [isAdmin, isAdminLoading] = useAdmin(user?.email);
//     const location = useLocation();

//     if (loading || isAdminLoading) {
//         return <Loading></Loading>
//     }

//     if (user && isAdmin) {
//         return children;
//     }

//     return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
// };

// export default SellerRoute;