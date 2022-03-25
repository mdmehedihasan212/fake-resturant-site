import React from 'react';
import './Meal.css';
import { BsCartCheck } from 'react-icons/bs';

const Meal = ({ meal, addOrderSummary }) => {
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
                <button onClick={() => addOrderSummary(meal)}>Add to Cart <BsCartCheck></BsCartCheck> </button>
            </div>
        </div>
    );
};

export default Meal;