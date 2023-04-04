import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    // for load data using router dom by loadrouter method
    const cartproducts = useLoaderData();
    // console.log(cartproducts)
    const [cart, setCart] = useState(cartproducts);

    const HandleRemoveFromCart = (id) => {
        const reamaining = cart.filter(product => product.id !== id);
        setCart(reamaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product =>
                        <ReviewItem
                            key={product.id}
                            product={product}
                            HandleRemoveFromCart={HandleRemoveFromCart}
                        >
                        </ReviewItem>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders; <h2>oders layout</h2>