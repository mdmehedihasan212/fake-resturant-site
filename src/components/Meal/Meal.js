import React from 'react';
import './Meal.css';

const Meal = ({ meal }) => {
    // console.log(meal);
    const { strMealThumb, strCategory, strYoutube, } = meal;
    return (
        <div className="meal-container">
            <img src={strMealThumb} alt="" />
            <p>{strCategory}</p>
            <button className="meal-btn">
                <a href={strYoutube}>Go to Youtube</a>
            </button>
        </div>
    );
};

export default Meal;