import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ summary }) => {
    console.log(summary);
    let total = 0;
    for (const product of summary) {
        total = total + parseFloat(product.idMeal);
    }
    const tax = (total * 0.05).toFixed(2);
    const grandTotal = total + parseFloat(tax);
    return (
        <div className="summary-container">
            <h2>Order Summary</h2>
            <p>Selected Item: {summary.length}</p>
            <p>Total Price: {total} Tk</p>
            <p>Total Delivery Charge: Free </p>
            <p>Tax: ${tax} Tk</p>
            <h3>Grand Total: ${grandTotal}</h3>
        </div>
    );
};

export default OrderSummary;