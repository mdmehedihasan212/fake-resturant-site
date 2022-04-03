import React from 'react';
import './Meal.css';
import { BsCartCheck } from 'react-icons/bs';

const Meal = ({ meal, addOrderSummary }) => {
    // console.log(meal);
    const { strMealThumb, strMeal, idMeal, strMeasure3 } = meal;

    return (
        <div className="meal-container">
            <img src={strMealThumb} alt="" />
            <div className="meal-info">
                <p title={strMeal} className="meal-name">Name:
                    {strMeal.length < 10 ? strMeal.length : strMeal.slice(0, 10) + '...'}
                </p>
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