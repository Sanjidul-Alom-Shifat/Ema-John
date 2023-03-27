import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        // console.log(products)
        const StoredCart = getShoppingCart();
        const savedCart = [];
        // step 1 : get id
        for (const id in StoredCart) {
            // step 2 : get the product by using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // step 3 : get quantity of the product
                const quantity = StoredCart[id];
                addedProduct.quantity = quantity;
                // step 4 : addedproduct to savedCart
                savedCart.push(addedProduct);
            }
        }
        // step 5 : 
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (product) => {
        // cart.push(product); 
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;