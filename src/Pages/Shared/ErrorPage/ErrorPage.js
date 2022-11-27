import React from 'react';
import errorImage from '../../../assets/Error/error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img className="w-full h-screen" src={errorImage} alt="" />
        </div>
    );
};

export default ErrorPage;