import React, { useContext } from 'react';
import { AdContext } from '../../../contexts/AdProvider';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {

    const { product, isAdvertise } = useContext(AdContext);

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            {
                isAdvertise && <Advertise
                    product={product}
                ></Advertise>
            }
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;