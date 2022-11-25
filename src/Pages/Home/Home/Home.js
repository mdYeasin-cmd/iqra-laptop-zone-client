import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;