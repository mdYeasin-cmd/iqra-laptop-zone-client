import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { createContext } from "react";

export const AdContext = createContext();

const AdProvider = ({ children }) => {

    const [isAdvertise, setIsAdvertise] = useState(false);
    const [product, setProduct] = useState({});
    console.log(product);

    const handleAdvertise = (product) => {
        console.log(product);
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ isAdvertise: true })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (product.isAdvertise === true) {
                    setIsAdvertise(true);
                    setProduct(product);
                    localStorage.setItem('product', JSON.stringify(product));
                }
            })


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