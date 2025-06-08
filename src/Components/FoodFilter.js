import React, { useState } from 'react';
import Data from '../Data/Data'; 
import Slider from 'react-slick';
import image from '../assets/pexels-photo-1640777.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FoodFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = [
        { name: 'All', img: image }, 
        ...Array.from(new Set(Data.item.map(item => ({
            name: item.category,
            img: item.categoryImage
        }))))
    ];

    const filteredItems = selectedCategory === 'All'
        ? Data.item
        : Data.item.filter(item => item.category === selectedCategory);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    };

    return (
        <div className=" text-white"> 
            <div className="p-7">
                <Slider {...settings} className="mb-4">
                    {categories.map((category, index) => (
                        <button onClick={() => setSelectedCategory(category.name)} key={index} className="px-4 py-2"> 
                            <div className={`relative border border-gray-300 rounded-lg shadow-md ${selectedCategory === category.name ? "shadow-[#facc15]" : "shadow-gray-300"}  transition-transform duration-300 transform hover:scale-105`}>
                                <img
                                    src={category.img}
                                    alt={category.name}
                                    className={`w-full h-52 object-cover rounded-lg `}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                                    <button
                                        className={`font-semibold ${selectedCategory === category.name ? "text-[#facc15]" : "text-white"}`}
                                    >
                                        {category.name}
                                    </button>
                                </div>
                            </div>
                        </button>
                    ))}
                </Slider>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredItems.map(item => (
                        <div key={item.id} className="border border-gray-300 rounded-lg p-4 text-center shadow-lg shadow-gray-300">
                            <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-2" />
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                            <p className="font-bold mt-2 text-[#facc15]">Price: ${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FoodFilter;