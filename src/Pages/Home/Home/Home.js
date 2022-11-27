import React, { useContext } from 'react';
import { AdContext } from '../../../contexts/AdProvider';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {

    // const { product, isAdvertise } = useContext(AdContext);

    // console.log(product);

    const productStr = localStorage.getItem('advertisedProduct');
    const product = JSON.parse(productStr);

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            {
                product?.isAdvertise && <Advertise
                    product={product}
                ></Advertise>
            }
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;