import image1 from '../assets/pexels-photo-2619970.jpeg';
import image2 from '../assets/pexels-photo-1640777.jpeg'; 
import image3 from '../assets/pexels-photo-2983099.jpeg'; 
import image4 from '../assets/pexels-photo-4057736.jpeg'; 
import image5 from '../assets/pexels-photo-4109998.jpeg'; 

const item = [
    {
        id: 1,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 12.99,
        img: image1,
        desc: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
        categoryImage: image1 // Use the same image for category
    },
    {
        id: 2,
        name: "Caesar Salad",
        category: "Salad",
        price: 8.99,
        img: image2,
        desc: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.",
        categoryImage: image2
    },
    {
        id: 3,
        name: "Cheeseburger",
        category: "Burger",
        price: 10.99,
        img: image3,
        desc: "Juicy beef patty with cheddar cheese, lettuce, and tomato.",
        categoryImage: image3
    },
    {
        id: 4,
        name: "Spaghetti Carbonara",
        category: "Pasta",
        price: 14.99,
        img: image4,
        desc: "Traditional pasta dish with eggs, cheese, pancetta, and pepper.",
        categoryImage: image4
    },
    {
        id: 5,
        name: "Chocolate Cake",
        category: "Dessert",
        price: 6.99,
        img: image5,
        desc: "Rich and moist chocolate cake topped with chocolate frosting.",
        categoryImage: image5
    }
];

export default { item };