import { useState } from 'react';
import Data from '../Data/Data'; 
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import image from '../assets/Cheese_Barak.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FoodFilter = () => {
    const { t, i18n } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState('All');
    

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    const uniqueCategoriesMap = new Map();

Data.item.forEach(item => {
    if (!uniqueCategoriesMap.has(item.category)) {
        uniqueCategoriesMap.set(item.category, {
            name: item.category,
            img: item.categoryImage
        });
    }
});

const categories = [
    { name: 'All', img: image },
    ...Array.from(uniqueCategoriesMap.values())
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
        <div className="flex justify-end gap-4 px-7 pt-4">
          <button
            onClick={toggleLanguage}
            className="absolute top-4 right-4 bg-yellow-400 text-black w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md hover:bg-yellow-300 transition z-10"
          >
            {i18n.language === "en" ? "AR" : "EN"}
          </button>
        </div>
        <div className="p-7">
          <Slider {...settings} className="mb-4">
            {categories.map((category, index) => (
              <button
                onClick={() => setSelectedCategory(category.name)}
                key={index}
                className="px-4 py-2"
              >
                <div
                  className={`relative border border-gray-300 rounded-lg shadow-md ${
                    selectedCategory === category.name
                      ? "shadow-[#facc15]"
                      : "shadow-gray-300"
                  }  transition-transform duration-300 transform hover:scale-105`}
                >
                  <img
                    src={category.img}
                    alt={category.name}
                    className={`w-full h-52 object-cover rounded-lg `}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                    <button
                      className={`font-semibold ${
                        selectedCategory === category.name
                          ? "text-[#facc15]"
                          : "text-white"
                      }`}
                    >
                      {t(category.name)}
                    </button>
                  </div>
                </div>
              </button>
            ))}
          </Slider>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-4 text-center shadow-lg shadow-gray-300"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h2 className="text-lg font-semibold">{t(item.name)}</h2>
                <p className="text-xs text-gray-500">{t(item.desc)}</p>
                <p className="font-bold mt-2 text-[#facc15]">{t("price")} : {item.price}{" "}{i18n.language === "ar" ? "ل.س" : "s.p"}</p>
                <hr className="font-bold mt-2 bg-[#facc15] h-[1.3px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default FoodFilter;