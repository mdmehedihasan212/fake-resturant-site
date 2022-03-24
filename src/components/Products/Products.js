import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Products.css';

const Products = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    return (
        <div className="products">
            <div className="products-container">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
            <div className="order-details">
                <h2>Order Details</h2>
            </div>
        </div>
    );
};

export default Products;