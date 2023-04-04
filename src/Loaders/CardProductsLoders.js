import { getShoppingCart } from "../utilities/fakedb";

const CardProductsLoaders = async () => {
    const LodedProducts = await fetch('products.json');
    const Products = await LodedProducts.json();
    // console.log(Products);

    const StoredCart = getShoppingCart();
    const savedCart = [];

    console.log(StoredCart);
    for (const id in StoredCart) {
        const addedProducts = Products.find(product => product.id === id);
        if (addedProducts) {
            const quantity = StoredCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts);
        }
    }

    return savedCart;
}

export default CardProductsLoaders;