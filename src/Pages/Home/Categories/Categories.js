import React from 'react';
import hp from '../../../assets/Categories/hp.png';
import dell from '../../../assets/Categories/dell.png';
import asus from '../../../assets/Categories/asus.jpg';
import Category from '../Category/Category';


const Categories = () => {

    const categories = [
        {
            categoryId: 'hp_brand_01',
            categroyName: 'HP',
            image: hp
        },
        {
            categoryId: 'dell_brand_02',
            categroyName: 'DELL',
            image: dell
        },
        {
            categoryId: 'assus_brand_03',
            categroyName: 'ASUS',
            image: asus
        },
    ]

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
                            key={category.categoryId}
                            category={category}
                        ></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;