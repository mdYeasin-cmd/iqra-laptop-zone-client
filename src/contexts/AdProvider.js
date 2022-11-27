import React, { useState } from 'react';
import { createContext } from "react";

export const AdContext = createContext();

const AdProvider = ({ children }) => {

    const [isAdvertise, setIsAdvertise] = useState(false);
    const [product, setProduct] = useState({});

    const handleAdvertise = (product) => {
        setIsAdvertise(true);
        setProduct(product);
        console.log(product);
    }

    const value = {
        isAdvertise,
        product,
        setIsAdvertise,
        setProduct,
        handleAdvertise
    }

    return (
        <AdContext.Provider value={value}>
            {children}
        </AdContext.Provider>
    );
};

export default AdProvider;