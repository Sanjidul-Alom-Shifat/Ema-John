import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { cart } = props; // option get values from cart property

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {

        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }

        // product.quantity = product.quantity || 1;

        total = total + (product.price * product.quantity);
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = (total * 10) / 100;
    const Grandtotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h3 className='cart-h'>Order Summary</h3>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h4>Grand Total : ${Grandtotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;