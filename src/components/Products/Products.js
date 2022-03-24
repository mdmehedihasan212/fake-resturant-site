import React, { useEffect, useState } from 'react';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState('');
    const [meals, setMeals] = useState([]);
    // console.log(meals);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${products}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [products])

    const searchProduct = (text) => {
        setProducts(text.target.value)
    }
    return (
        <div className="products">
            <div className="products-container">
                <h2>Find the food you want</h2>
                <input onChange={searchProduct} type="text" name="" id="" />
                <div className="meals-container">
                    {
                        meals.map(meal => console.log(meal))
                    }
                </div>
            </div>
            <div className="order-details">
                <h3>Details</h3>
            </div>
        </div>
    );
};

export default Products;