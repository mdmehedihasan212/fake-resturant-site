import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ summary }) => {
    // console.log(summary);

    let count = 0
    let total = 0;

    for (const meal of summary) {
        count = count + meal.quantity;
        total = count * parseFloat(meal.idMeal);
    }

    const tax = (total * 0.05).toFixed(2);
    const grandTotal = total + parseFloat(tax);
    return (
        <div className="summary-container">
            <h2>Order Summary</h2>
            <p>Selected Item: {count}</p>
            <p>Total Price: {total} Tk</p>
            <p>Total Delivery Charge: Free </p>
            <p>Tax: ${tax} Tk</p>
            <h3>Grand Total: ${grandTotal}</h3>
            {count !== 4 ? <p>Add More</p> : <button>Clear All</button>}
        </div>
    );
};

export default OrderSummary;