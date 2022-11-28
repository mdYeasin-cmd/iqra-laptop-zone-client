import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';


const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch(`https://iqra-laptop-zone-server.vercel.app/categories`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCategories(data);
        })
        .catch(error => console.error(error));

    }, []);

    return (
        <div className="bg-slate-50">
            <div className='py-14 max-w-[1140px] mx-auto'>
                <div>
                    <h2 className="text-4xl text-center uppercase font-semibold">Our Categories</h2>
                    <p className="text-center mt-2">We resale various kind of brand laptop. You can visit our every category section.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-7">
                    {
                        categories.map(category => <Category
                            key={category._id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;