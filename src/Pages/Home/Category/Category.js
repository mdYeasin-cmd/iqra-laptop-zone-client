import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <figure>
                <img className="w-full h-64" src={category.image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center text-3xl">{category.categroyName}</h2>
                <div className="card-actions">
                    <Link to={`/category/${category.categoryId}`} className="w-full">
                        <button className="btn border-0 bg-red-700 hover:bg-red-600 w-full">View Products</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;