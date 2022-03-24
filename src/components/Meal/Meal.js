import React from 'react';
import './Meal.css';

const Meal = ({ meal }) => {
    console.log(meal);
    const { strMealThumb, strMeal, idMeal, strMeasure3 } = meal;
    return (
        <div className="meal-container">
            <img src={strMealThumb} alt="" />
            <div className="meal-info">
                <p className="meal-name">Name: {strMeal}</p>
                <p>Quantity: {strMeasure3}</p>
                <p>Price: {idMeal} Tk</p>
            </div>
            <div className="buttons">
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Meal;