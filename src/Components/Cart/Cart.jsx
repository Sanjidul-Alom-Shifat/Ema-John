import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { cart } = props; // option get values from cart property

    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = (total * 10) / 100;
    const grandtotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h3 className='cart-h'>Order Summary</h3>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h4>Grand Total : ${grandtotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;