import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Meal from '../Meal/Meal';
import OrderSummary from '../OrderSummary/OrderSummary';
import './Products.css';

const Products = () => {
    const [meals, setMeals] = useState([]);
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=fish';
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])


    useEffect(() => {
        const getLocalStored = getStoredCart();
        const newPushLocalStored = [];

        for (const id in getLocalStored) {
            const addedMeal = meals.find(meal => meal.idMeal === id);
            if (addedMeal) {
                const quantity = getLocalStored[id]
                addedMeal.quantity = quantity + 1;
                newPushLocalStored.push(addedMeal)
            }
        }
        setSummary(newPushLocalStored)
    }, [meals])

    const clickAddSummary = (meal) => {
        // console.log(meal);

        let newSummary = [];
        const exist = summary.find(m => m.idMeal === meal.idMeal)
        if (exist) {
            const rest = summary.filter(m => m.idMeal !== meal.idMeal)
            exist.quantity = exist.quantity + 1;
            newSummary = [...rest, exist]
        }
        else {
            meal.quantity = 1;
            newSummary = [...summary, meal]
        }

        // const newSummary = [...summary, meal]
        setSummary(newSummary)
        addToDb(meal.idMeal)
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