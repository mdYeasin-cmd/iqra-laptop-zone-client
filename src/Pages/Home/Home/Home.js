import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;