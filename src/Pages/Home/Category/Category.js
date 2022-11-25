import React from 'react';

const Category = ({ category }) => {

    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <figure>
                <img className="w-full h-64" src={category.image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center text-3xl">{category.categroyName}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions">
                    <button className="btn border-0 bg-red-700 hover:bg-red-600 w-full">View Products</button>
                </div>
            </div>
        </div>
    );
};

export default Category;