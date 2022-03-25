import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import OrderSummary from '../OrderSummary/OrderSummary';
import './Products.css';

const Products = () => {
    const [meals, setMeals] = useState([]);
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    const clickAddSummary = (meal) => {
        // console.log(meal);
        const newSummary = [...summary, meal]
        setSummary(newSummary)
    }

    return (
        <div className="products">
            <div className="products-container">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal} addOrderSummary={clickAddSummary}></Meal>)
                }
            </div>
            <div className="order-details">
                <OrderSummary summary={summary}></OrderSummary>
            </div>
        </div>
    );
};

export default Products;